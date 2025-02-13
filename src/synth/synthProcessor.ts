import { initSynthPatch } from "../presets/init";
import { MidiNote, SynthMessage } from "./synthMessage";
import { SynthNote } from "./synthNote";
import { convertSynthPatchToEx, SynthPatch, SynthPatchEx } from "./synthPatch";

export class SynthProcessor extends AudioWorkletProcessor {
    private readonly synthNoteMap = new Map<MidiNote, SynthNote>();
    private readonly fadeOutNotes: SynthNote[] = [];
    private synthPatchEx: SynthPatchEx = convertSynthPatchToEx(initSynthPatch);
    private polyphony = 2;
    private pitchBend = 0;
    private modulation = 0;

    constructor() {
        super();
        this.listenMessages();
    }

    /** 一番古いノートを取得します。 */
    private get oldestNote(): MidiNote | undefined {
        let oldestNote: MidiNote | undefined = undefined;
        let sampleIndex = 0;        

        for (const [midiNote, synthNote] of this.synthNoteMap.entries()) {
            if (oldestNote == null || sampleIndex < synthNote.sampleIndex) {
                oldestNote = midiNote;
                sampleIndex = synthNote.sampleIndex;
            }
        }
        return oldestNote;
    }

    process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: Record<string, Float32Array>): boolean {
        const output = outputs[0];
        const leftChannel = output[0];
        const rightChannel = output[1];
        
        const pitchBend = this.pitchBend * this.synthPatchEx.bendRange;
        const modulation = this.modulation;

        const wave = [0, 0];
        for (let i = 0; i < leftChannel.length; i++) {
            wave[0] = wave[1] = 0;

            // ノートオン or リリース状態
            for (const note of Array.from(this.synthNoteMap.values())) {
                if (!note.generateSample(wave, pitchBend, modulation)) {
                    this.synthNoteMap.delete(note.note);
                }
            }

            // 短いフェードアウト
            for (let j = this.fadeOutNotes.length - 1; j >= 0; j--) {
                if (!this.fadeOutNotes[j].generateSample(wave, pitchBend, modulation)) {
                    this.fadeOutNotes.splice(j);
                }
            }

            leftChannel[i] = wave[0];
            rightChannel[i] = wave[1];
        }

        return true;
    }

    private listenMessages() {
        this.port.onmessage = e => {
            const msg = e.data as SynthMessage;
            //console.log(e.data);
            switch (msg.type) {
                case "NoteOn":
                    this.onNoteOn(msg.note);
                    break;
                case "NoteOff":
                    this.onNoteOff(msg.note);
                    break;
                case "PitchBend":
                    this.pitchBend = msg.pitchBend;
                    break;
                case "Modulation":
                    this.modulation = msg.modulation;
                    break;
                case "Patch":
                    this.onPatch(msg.patch);
                    break;
                case "Polyphony":
                    this.onPolyphony(msg.polyphony);
                    break;
            }
        };
    }

    /** 指定された音階のノートがあれば短いフェードアウトで消すようにします。 */
    private fadeOutNote(note: MidiNote): void {
        const oldNote = this.synthNoteMap.get(note);
        if (oldNote == null) { return; }
        oldNote.fadeOutStartSec = oldNote.curSec;
        this.fadeOutNotes.push(oldNote);
        this.synthNoteMap.delete(note);
    }

    /** 同時発音数上限をチェックし、超えていたらフェードアウトさせます。 */
    private checkPolyphony(): void {
        while (this.polyphony < this.synthNoteMap.size) {
            const oldestNote = this.oldestNote;
            if (oldestNote == null) { break; }
            this.fadeOutNote(oldestNote);
        }
    }

    private onNoteOn(note: MidiNote): void {
        const oldNote = this.synthNoteMap.get(note);
        if (oldNote != null && oldNote.noteOffSec == null) { return; }
        if (oldNote != null && oldNote.noteOffSec != null) {
            this.fadeOutNote(note);
            //return;
        }
        this.synthNoteMap.set(note, new SynthNote(note, this.synthPatchEx));
        this.checkPolyphony();
    }

    private onNoteOff(note: MidiNote): void {
        const synthNote = this.synthNoteMap.get(note);
        if (synthNote == null) {
            return;
        }
        if (synthNote.noteOffSec == null) {
            synthNote.noteOffSec = synthNote.curSec;
        }
    }

    /** パッチを変更します。 */
    private onPatch(path: SynthPatch): void {
        this.synthPatchEx = convertSynthPatchToEx(path);

        for (const note of this.synthNoteMap.values()) {
            note.updatePatch(this.synthPatchEx);
        }
        this.fadeOutNotes.forEach(n => n.updatePatch(this.synthPatchEx));
    }

    private onPolyphony(polyphony: number): void {
        this.polyphony = polyphony;
        this.checkPolyphony();
    }
}