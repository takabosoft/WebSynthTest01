import { MidiNote, SynthMessage } from "./synthMessage";
import { SynthPatch } from "./synthPatch";

/** `SynthProcessor`へメッセージを送る係 */
export class SynthProcessorWrapper {
    constructor(private readonly node: AudioWorkletNode) {}

    private send(msg: SynthMessage): void {
        this.node.port.postMessage(msg);
    }

    /**
     * ノートオン
     * @param note 
     */
    noteOn(note: MidiNote): void {
        this.send({ type: "NoteOn", note });
    }

    /**
     * ノートオフ
     * @param note 
     */
    noteOff(note: MidiNote): void {
        this.send({ type: "NoteOff", note });
    }

    /**
     * ピッチベンド
     * @param pitchBend -1.0～1.0 
     */
    pitchBend(pitchBend: number): void {
        this.send({ type: "PitchBend", pitchBend });
    }

    /**
     * モジュレーション
     * @param modulation 0.0～1.0 
     */
    modulation(modulation: number): void {
        this.send({ type: "Modulation", modulation });
    }

    /**
     * パッチの変更
     * @param patch 
     */
    patch(patch: SynthPatch): void {
        this.send({ type: "Patch", patch });
    }

    /**
     * マスターボリュームの変更
     * @param volume 
     */
    masterVolume(volume: number): void {
        this.send({ type: "MasterVolume", volume });
    }

    /**
     * 最大同時発音数の変更
     * @param polyphony 
     */
    polyphony(polyphony: number): void {
        this.send({ type: "Polyphony", polyphony: Math.floor(polyphony) });
    }
}