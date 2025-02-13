(()=>{"use strict";var e={393:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const a=n(658);class s extends a.Component{constructor(e,t){super(),this.element=$('<button class="btn">').text(e).on("click",t)}}t.Button=s},658:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0,t.Component=class{constructor(){this.element=$()}}},230:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.polyphonyDefault=t.masterVolumeDefault=t.highLightColor=void 0,t.highLightColor="#4088D9",t.masterVolumeDefault=.3,t.polyphonyDefault=10},373:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EnvelopePreview=void 0;const a=n(287),s=n(617),i=n(230),o=n(853),r=n(658),h=new s.Vec2(170,48);class l extends r.Component{constructor(){super(),this.element=$(`<svg width="${h.x}" height="${h.y}">`).css({"margin-left":"8px",overflow:"hidden"}),this.render({attackSec:1,attackShape:0,decaySec:1,decayShape:0,sustain:.8,releaseSec:1,releaseShape:0})}render(e){var t;this.element.empty(),this.element[0];const n=new a.Rect(2,2,h.x-4,h.y-2),s=e.attackSec+e.decaySec+1,r=s+e.releaseSec;let l=`M${n.x} ${n.bottom}`;for(let a=0;a<n.width;a++){const i=a*r/(n.width-1);l+=`L${n.x+a} ${n.bottom-n.height*(null!==(t=(0,o.calcEnvelope)(e,i,s))&&void 0!==t?t:0)}`}const c=$(document.createElementNS("http://www.w3.org/2000/svg","path")).attr({stroke:i.highLightColor,"stroke-width":2,"stroke-linejoin":"round",fill:"#4088D988",d:l});this.element.append(c)}}t.EnvelopePreview=l},912:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderPanel=void 0;const a=n(438),s=n(658),i=n(230),o=n(549),r=n(915),h=n(292),l=n(166),c=n(393);class p extends s.Component{constructor(e,t,n,s,p,u){super(),this.synthProcessor=e,this.masterGainNode=t,this.patchNameInput=new l.PatchNameInput,this.masterVolumeKnob=new o.KnobWithInput(60,"M.Volume",0,.7,a.tinyFM1LocalStorage.masterVolume,i.masterVolumeDefault,void 0,3,(e=>{this.masterGainNode.gain.value=e,a.tinyFM1LocalStorage.masterVolume=e})),this.polyphonyKnob=new o.KnobWithInput(60,"Polyphony",1,99,a.tinyFM1LocalStorage.polyphony,i.polyphonyDefault,void 0,0,(e=>{this.synthProcessor.polyphony=e,a.tinyFM1LocalStorage.polyphony=e})),this.presetSelector=new r.PresetSelector(s),this.spectrumAnalyzer=new h.SpectrumAnalyzer(n),this.element=$('<div class="header-panel">').append($("<div>").append($('<div class="title">').text("TinyFM1"),$('<div class="copyright">(C) <a href="https://takabosoft.com" target="_blank">Takabo Soft</a></div>')),this.patchNameInput.element,$('<div class="buttons">').append(this.presetSelector.element,new c.Button("Save",p).element,new c.Button("Share Patch to X",u).element,new c.Button("Doc",(()=>window.open("https://github.com/takabosoft/tiny-fm-1","_blank"))).element),$('<div class="align-right">'),this.spectrumAnalyzer.element,this.polyphonyKnob.element.css("margin-right",8),this.masterVolumeKnob.element),t.gain.value=this.masterVolumeKnob.value,this.synthProcessor.polyphony=this.polyphonyKnob.value}}t.HeaderPanel=p},512:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.KeyboardPanel=void 0;const a=n(658),s=n(549),i=n(250);class o extends a.Component{constructor(e,t,n){super(),this.synthProcessor=e,this.virtualKeyboard=t,this.onPatchEdit=n,this.bendRangeKnob=new s.KnobWithInput(60,"Bend Range",0,12,2,2,void 0,3,(()=>this.onPatchEdit())),this.pitchBendKnob=new s.KnobWithInput(60,"Pitch Bend",-1,1,0,0,0,3,(e=>this.synthProcessor.pitchBend=e)),this.modulationFreqKnob=new s.KnobWithInput(60,"Mod Freq",1,10,5,5,void 0,3,(()=>this.onPatchEdit())),this.modulationKnob=new s.KnobWithInput(60,"Modulation",0,1,0,0,void 0,3,(e=>this.synthProcessor.modulation=e)),this.scrollKnob=new s.KnobWithInput(60,"Scroll",0,127,64,64,64,0,(()=>this.scrollVirtualKeyboard())),this.element=$('<div class="keyboard-panel">').append($('<div class="grid">').append(this.bendRangeKnob.element,this.modulationFreqKnob.element,this.pitchBendKnob.element,this.modulationKnob.element),$('<div class="key-v-stack">').append((new i.MidiInSelector).element,$('<div class="virtual-keyboard-wrapper">').append(t.element)),this.scrollKnob.element)}get bendRange(){return this.bendRangeKnob.value}set bendRange(e){this.bendRangeKnob.value=e}set pitchBend(e){this.pitchBendKnob.value=e}get modulationFreq(){return this.modulationFreqKnob.value}set modulationFreq(e){this.modulationFreqKnob.value=e}set modulation(e){this.modulationKnob.value=e}scrollVirtualKeyboard(){this.virtualKeyboard.visibleKey(Math.floor(this.scrollKnob.value))}}t.KeyboardPanel=o},441:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Knob=void 0;const a=n(617),s=n(230),i=n(658),o=n(303);class r extends i.Component{constructor(e=70,t,n,a,i,o,r){super(),this.size=e,this.min=t,this.max=n,this._value=a,this.resetValue=i,this.centerValue=o,this.onInput=r,this.bottomSpaceDeg=45,this.lineLen=10,this.strokeWidth=4,this.beginDeg=270-this.bottomSpaceDeg,this.endDeg=this.beginDeg-360+2*this.bottomSpaceDeg,this._value=this.clampValue(this._value),this.svg=$(`<svg width="${this.size}" height="${this.size}">`),this.appendPath("rgba(0, 0, 0, 0.08)",this.strokeWidth,this.buildPathArcD(this.min,this.max)),this.arcPath=this.appendPath(s.highLightColor,this.strokeWidth,""),this.appendValueLine(this.min),this.appendValueLine(this.max),null!=o&&this.appendValueLine(o),this.element=$('<div class="knob">').append(this.svg,$("<div>").append("<div>")),this.updateKnobAngle(),this.listenPointerEvents()}get value(){return this._value}set value(e){e=this.clampValue(e),this._value!=e&&(this._value=e,this.updateKnobAngle())}updateKnobAngle(){this.element.css({"--angle":90-this.valueToDeg(this._value)+"deg"}),null!=this.centerValue?this._value<this.centerValue?this.arcPath.attr("d",this.buildPathArcD(this._value,this.centerValue)):this.arcPath.attr("d",this.buildPathArcD(this.centerValue,this._value)):this.arcPath.attr("d",this.buildPathArcD(this.min,this._value))}clampValue(e){return Math.max(Math.min(e,this.max),this.min)}buildPathArcD(e,t){const n=this.size/2-this.lineLen/2,a=this.calcValuePos(e,n),s=this.calcValuePos(t,n),i=this.valueToDeg(e)-this.valueToDeg(t)>180;return`M${a.x} ${a.y} A${n} ${n} 0 ${i?1:0} 1 ${s.x} ${s.y}`}appendPath(e,t,n){const a=$(document.createElementNS("http://www.w3.org/2000/svg","path")).attr({stroke:e,"stroke-width":t,fill:"none",d:n});return this.svg.append(a),a}appendValueLine(e){const t=this.calcValuePos(e,this.size/2),n=this.calcValuePos(e,this.size/2-this.lineLen);this.appendPath("#333",1,`M${t.x} ${t.y} L${n.x} ${n.y}`)}calcValuePos(e,t){const n=this.valueToDeg(e)*Math.PI/180;return new a.Vec2(this.size/2+Math.cos(n)*t,this.size/2-Math.sin(n)*t)}valueToDeg(e){const t=(this.clampValue(e)-this.min)/(this.max-this.min);return this.beginDeg*(1-t)+this.endDeg*t}listenPointerEvents(){const e=this.element[0];let t,n,a=0,s=0;const i=e=>{const t=this.clampValue(e);this._value!=t&&(this._value=t,this.updateKnobAngle(),this.onInput(t))};e.addEventListener("touchstart",(e=>e.preventDefault())),e.addEventListener("pointerdown",(r=>{r.preventDefault(),(0,o.blurActiveElement)(),null==t&&("button"==r.pointerType&&0!=r.button||(null!=n&&r.timeStamp-n<200?i(this.resetValue):(e.setPointerCapture(r.pointerId),t=r.pointerId,a=this._value,s=r.clientY,n=r.timeStamp)))})),e.addEventListener("pointermove",(n=>{n.preventDefault(),e.hasPointerCapture(n.pointerId)&&n.pointerId==t&&i(a+(s-n.clientY)*(this.max-this.min)/180)}));const r=e=>{e.preventDefault(),e.pointerId==t&&(t=void 0)};e.addEventListener("lostpointercapture",r),e.addEventListener("pointercancel",r)}}t.Knob=r},549:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.KnobWithInput=void 0;const a=n(658),s=n(441);class i extends a.Component{constructor(e,t,n,a,i,o,r,h,l){super(),this.fractionDigits=h,this.input=$('<input type="number" step="any">'),this.knob=new s.Knob(e,n,a,i,o,r,(e=>{this.knobToInput(),l(e)})),this.element=$('<div class="knob-with-input">').append($("<h5>").text(t),this.knob.element,this.input),this.knobToInput(),this.input.on("change",(()=>{const e=this.knob.value,t=parseFloat(this.input.val()+"");isNaN(t)?this.knobToInput():(this.knob.value=t,this.knob.value!=e&&(this.knobToInput(),l(this.knob.value)))})).on("keydown",(e=>{"Enter"==e.key?this.input.trigger("blur"):"Escape"==e.key&&(this.knobToInput(),this.input.trigger("blur"))})).css({width:e})}get value(){return this.knob.value}set value(e){const t=this.knob.value;this.knob.value=e,this.knob.value!=t&&this.knobToInput()}knobToInput(){this.input.val(this.knob.value.toFixed(this.fractionDigits))}}t.KnobWithInput=i},250:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MidiInSelector=void 0;const a=n(221),s=n(438),i=n(658);class o extends i.Component{constructor(){super(),a.midiInManager.curDeviceName=s.tinyFM1LocalStorage.midiInName,this.element=$('<select class="midi-in-selector">').append($("<option>").text("MIDI IN Device").val(""),a.midiInManager.names.map((e=>$("<option>").text(e).val(e)))),this.element[0].selectedIndex=a.midiInManager.names.indexOf(a.midiInManager.curDeviceName)+1,this.element.on("change",(()=>{const e=this.element.val()+"";a.midiInManager.curDeviceName=e,s.tinyFM1LocalStorage.midiInName=e}))}}t.MidiInSelector=o},835:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OperatorPanel=void 0;const a=n(853),s=n(311),i=n(658),o=n(373),r=n(549),h=60;class l extends i.Component{constructor(e,t){super(),this.onPatchEdit=t,this.ratioKnob=new r.KnobWithInput(h,"Ratio",0,64,1,1,void 0,3,(()=>this.onPatchEdit())),this.offsetKnob=new r.KnobWithInput(h,"Offset(Hz)",0,9999,0,0,void 0,2,(()=>this.onPatchEdit())),this.sendKnobs=[],this.ampEnvAttackKnob=new r.KnobWithInput(h,"Attack(s)",0,4,0,0,void 0,3,(()=>this.onAmpEnvChange())),this.ampEnvAttackShapeKnob=new r.KnobWithInput(h,"A Shape",a.shapeMin,a.shapeMax,0,0,0,2,(()=>this.onAmpEnvChange())),this.ampEnvDecayKnob=new r.KnobWithInput(h,"Decay(s)",0,4,0,0,void 0,3,(()=>this.onAmpEnvChange())),this.ampEnvDecayShapeKnob=new r.KnobWithInput(h,"D Shape",a.shapeMin,a.shapeMax,0,0,0,2,(()=>this.onAmpEnvChange())),this.ampEnvSustainKnob=new r.KnobWithInput(h,"Sustain",0,1,1,1,void 0,3,(()=>this.onAmpEnvChange())),this.ampEnvReleaseKnob=new r.KnobWithInput(h,"Release(s)",0,4,0,0,void 0,3,(()=>this.onAmpEnvChange())),this.ampEnvReleaseShapeKnob=new r.KnobWithInput(h,"R Shape",a.shapeMin,a.shapeMax,0,0,0,2,(()=>this.onAmpEnvChange())),this.envelopePreview=new o.EnvelopePreview,this.volumeKnob=new r.KnobWithInput(h,"Volume",0,1,0,0,void 0,3,(()=>this.onPatchEdit())),this.panKnob=new r.KnobWithInput(h,"Pan",-1,1,0,0,0,3,(()=>this.onPatchEdit()));for(let t=0;t<s.operatorCount;t++)this.sendKnobs.push(new r.KnobWithInput(h,t==e?"FeedBack":`Send ${"ABCDEF"[t]}`,0,10,0,0,0,3,(()=>this.onPatchEdit())));this.element=$('<div class="operator-panel">').append($('<div class="title">').text(`OP ${"ABCDEF"[e]}`),this.ratioKnob.element,this.offsetKnob.element,$('<div class="sp">'),this.sendKnobs.map((e=>e.element)),$('<div class="sp">'),this.ampEnvAttackKnob.element,this.ampEnvAttackShapeKnob.element,this.ampEnvDecayKnob.element,this.ampEnvDecayShapeKnob.element,this.ampEnvSustainKnob.element,this.ampEnvReleaseKnob.element,this.ampEnvReleaseShapeKnob.element,this.envelopePreview.element,$('<div class="sp">'),this.volumeKnob.element,this.panKnob.element)}get envelopeParams(){return{attackSec:this.ampEnvAttackKnob.value,attackShape:this.ampEnvAttackShapeKnob.value,decaySec:this.ampEnvDecayKnob.value,decayShape:this.ampEnvDecayShapeKnob.value,sustain:this.ampEnvSustainKnob.value,releaseSec:this.ampEnvReleaseKnob.value,releaseShape:this.ampEnvReleaseShapeKnob.value}}get operatorParams(){return{frequencyRatio:this.ratioKnob.value,frequencyOffsetHz:this.offsetKnob.value,sendDepths:[this.sendKnobs[0].value,this.sendKnobs[1].value,this.sendKnobs[2].value,this.sendKnobs[3].value,this.sendKnobs[4].value,this.sendKnobs[5].value],ampEnvelope:this.envelopeParams,volume:this.volumeKnob.value,pan:this.panKnob.value}}set operatorParams(e){this.ratioKnob.value=e.frequencyRatio,this.offsetKnob.value=e.frequencyOffsetHz,this.sendKnobs.forEach(((t,n)=>t.value=e.sendDepths[n])),this.ampEnvAttackKnob.value=e.ampEnvelope.attackSec,this.ampEnvAttackShapeKnob.value=e.ampEnvelope.attackShape,this.ampEnvDecayKnob.value=e.ampEnvelope.decaySec,this.ampEnvDecayShapeKnob.value=e.ampEnvelope.decayShape,this.ampEnvSustainKnob.value=e.ampEnvelope.sustain,this.ampEnvReleaseKnob.value=e.ampEnvelope.releaseSec,this.ampEnvReleaseShapeKnob.value=e.ampEnvelope.releaseShape,this.envelopePreview.render(e.ampEnvelope),this.volumeKnob.value=e.volume,this.panKnob.value=e.pan}onAmpEnvChange(){this.envelopePreview.render(this.envelopeParams),this.onPatchEdit()}}t.OperatorPanel=l},166:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PatchNameInput=void 0;const a=n(658);function s(e){return[...e].slice(0,128).join("")}class i extends a.Component{constructor(){super(),this.element=$('<input type="text" maxlength="128" placeholder="Unnamed Patch" class="patch-name-input">')}get name(){return s(this.element.val()+"")}set name(e){this.element.val(s(e))}}t.PatchNameInput=i},915:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PresetSelector=void 0;const a=n(479),s=n(658);class i extends s.Component{constructor(e){super(),this.element=$('<select class="btn">').append($("<option>").text("Preset"),a.presets.map((e=>$("<option>").text(e.name)))).on("change",(()=>{this.selectedIndex>0&&e(a.presets[this.selectedIndex-1]),this.selectedIndex=0}))}get selectEl(){return this.element[0]}get selectedIndex(){return this.selectEl.selectedIndex}set selectedIndex(e){this.selectEl.selectedIndex=e}}t.PresetSelector=i},292:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SpectrumAnalyzer=void 0;const a=n(617),s=n(658),i=new a.Vec2(200,50);class o extends s.Component{constructor(e){super(),this.analyserNode=e,this.element=$(`<canvas class="spectrum-analyzer" width="${i.x}" height="${i.y}"}>`),this.dataArray=new Uint8Array(this.analyserNode.frequencyBinCount);const t=this.element[0];this.ctx=t.getContext("2d"),requestAnimationFrame((()=>this.render()))}render(){const e=this.ctx;e.clearRect(0,0,i.x,i.y),this.analyserNode.getByteFrequencyData(this.dataArray),e.lineWidth=1,e.strokeStyle="rgb(255, 255, 255)",e.beginPath();const t=1*i.x/this.dataArray.length;let n=0;for(let a=0;a<this.dataArray.length;a++){const s=this.dataArray[a]/255,o=i.y+1-s*i.y;0===a?e.moveTo(n,o):e.lineTo(n,o),n+=t}e.stroke(),requestAnimationFrame((()=>this.render()))}}t.SpectrumAnalyzer=o},567:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SynthBody=void 0;const a=n(221),s=n(186),i=n(311),o=n(12),r=n(93),h=n(658),l=n(912),c=n(512),p=n(835),u=n(463);class d extends h.Component{constructor(e){super(),this.keyNoteDefaultMap=new Map([["z",48],["x",50],["c",52],["v",53],["b",55],["n",57],["m",59],["s",49],["d",51],["g",54],["h",56],["j",58],[",",60],[".",62],["/",64],["l",61],[";",63]]),this.midiNoteOnSet=new Set,this.pcKeyNoteStateMap=new Map,this.operatorPanels=[],this.pcKeyOctaveShift=1,this.synthProcessor=new o.SynthProcessorWrapper(e);const t=e.createAnalyser();t.fftSize=1024;const n=e.createGain();this.synthProcessor.node.connect(t),t.connect(n),n.connect(e.destination);for(let e=0;e<i.operatorCount;e++)this.operatorPanels.push(new p.OperatorPanel(e,(()=>this.synthProcessor.patch=this.synthPatch)));this.keyboardPanel=new c.KeyboardPanel(this.synthProcessor,new u.VirtualKeyboard({height:150,onKeyDown:e=>this.noteOn(e),onKeyUp:e=>this.noteOff(e)}),(()=>this.synthProcessor.patch=this.synthPatch)),this.headerPanel=new l.HeaderPanel(this.synthProcessor,n,t,(e=>{this.updateUIFromSynthPatch(e),this.synthProcessor.patch=this.synthPatch}),(()=>(0,r.savePatchToCurrentURL)(this.synthPatch)),(()=>this.sharePatchToX())),this.element=$('<div class="synth-body">').append(this.headerPanel.element,this.operatorPanels.map((e=>e.element)),this.keyboardPanel.element),a.midiInManager.onChangeCurDevice=()=>this.allNoteOff(),a.midiInManager.onNoteOn=e=>this.noteOn(e),a.midiInManager.onNoteOff=e=>this.noteOff(e),a.midiInManager.onPitchBend=e=>{this.synthProcessor.pitchBend=e,this.keyboardPanel.pitchBend=e},a.midiInManager.onModulation=e=>{this.synthProcessor.modulation=e,this.keyboardPanel.modulation=e},this.listenPCKeyboard(),this.initializeSynthPatch()}get synthPatch(){return{name:this.headerPanel.patchNameInput.name,operatorsParams:[this.operatorPanels[0].operatorParams,this.operatorPanels[1].operatorParams,this.operatorPanels[2].operatorParams,this.operatorPanels[3].operatorParams,this.operatorPanels[4].operatorParams,this.operatorPanels[5].operatorParams],bendRange:this.keyboardPanel.bendRange,modulationFrequency:this.keyboardPanel.modulationFreq}}initializeSynthPatch(){const e=(0,r.loadPatchFromCurrentURL)();if(null!=e)this.updateUIFromSynthPatch(e),this.synthProcessor.patch=this.synthPatch;else{const e=s.basic1SynthPatch;this.synthProcessor.patch=e,this.updateUIFromSynthPatch(e)}}updateUIFromSynthPatch(e){this.headerPanel.patchNameInput.name=e.name;for(let t=0;t<i.operatorCount;t++)this.operatorPanels[t].operatorParams=e.operatorsParams[t];this.keyboardPanel.bendRange=e.bendRange,this.keyboardPanel.modulationFreq=e.modulationFrequency}noteOn(e){var t;this.midiNoteOnSet.has(e)||(this.midiNoteOnSet.add(e),null===(t=this.synthProcessor)||void 0===t||t.noteOn(e),this.keyboardPanel.virtualKeyboard.selectKey(e,!0))}noteOff(e){var t;this.midiNoteOnSet.has(e)&&(this.midiNoteOnSet.delete(e),null===(t=this.synthProcessor)||void 0===t||t.noteOff(e),this.keyboardPanel.virtualKeyboard.selectKey(e,!1))}allNoteOff(){[...this.midiNoteOnSet].forEach((e=>this.noteOff(e)))}listenPCKeyboard(){document.addEventListener("keydown",(e=>{if(e.target instanceof HTMLInputElement)return;if(this.pcKeyNoteStateMap.has(e.key))return;let t=this.keyNoteDefaultMap.get(e.key);null!=t&&(t+=12*this.pcKeyOctaveShift,t>=0&&t<=127&&(this.noteOn(t),this.pcKeyNoteStateMap.set(e.key,t)))})),document.addEventListener("keyup",(e=>{const t=this.pcKeyNoteStateMap.get(e.key);null!=t&&(this.noteOff(t),this.pcKeyNoteStateMap.delete(e.key))}))}sharePatchToX(){const e=(0,r.buildPatchURL)(this.synthPatch);if(null==e)return;const t=new URL("https://x.com/intent/post");t.searchParams.append("text",`#tiny_fm_1 ${this.headerPanel.patchNameInput.name}`),t.searchParams.append("url",e),window.open(t.toString(),"_blank")}scrollVirtualKeyboard(){this.keyboardPanel.scrollVirtualKeyboard()}}t.SynthBody=d},463:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.VirtualKeyboard=void 0;const a=n(287),s=n(617),i=n(303),o=n(658);function r(e){switch(e%12){case 0:case 2:case 4:case 5:case 7:case 9:case 11:return!0}return!1}class h extends o.Component{constructor(e={}){var t,n,a,s;super(),this.keyMap=new Map,this.selectedKeySet=new Set,this.height=null!==(t=e.height)&&void 0!==t?t:200,this.minNote=null!==(n=e.minNote)&&void 0!==n?n:0,this.maxNote=null!==(a=e.maxNote)&&void 0!==a?a:127,this.whiteKeyWidth=null!==(s=e.whiteKeyWidth)&&void 0!==s?s:32,this.blackKeyWidth=Math.ceil(.8*this.whiteKeyWidth),this.onKeyDown=e.onKeyDown,this.onKeyUp=e.onKeyUp,this.element=$('<div class="virtual-keyboard">').css({height:this.height}),this.layout(),this.listenPointerEvents()}layout(){this.element.empty(),this.keyMap.clear();const e=r(this.minNote)?this.minNote:this.minNote+1,t=Math.floor(e/12);let n=-function(e){let t=0;for(let n=e%12;n>0;n--)r(n)&&t++;return t}(e)*this.whiteKeyWidth;for(let e=12*t;e<=this.maxNote;e++){const t=t=>{this.keyMap.set(e,t),this.element.append(t.element),t.isSelected=this.selectedKeySet.has(e)};if(r(e)){if(e>=this.minNote){const s=e%12==0?"C"+(e/12-1):"";t(new c(new a.Rect(n,0,this.whiteKeyWidth,this.height),s))}n+=this.whiteKeyWidth}else if(e>=this.minNote){const s=(()=>{switch(e%12){case 1:case 6:return-1;case 3:case 10:return 1}return 0})();t(new p(new a.Rect(Math.round(n-this.blackKeyWidth/2+s*this.blackKeyWidth*.1),0,this.blackKeyWidth,Math.ceil(.6*this.height))))}}this.element.css({width:n})}hitTest(e){const t=s.Vec2.fromPointerEvent(e,this.element),n=new s.Vec2(t.x,Math.min(Math.max(t.y,0),this.height-1));let a;for(const[e,t]of this.keyMap.entries())if(t.rect.isPointInside(n)){if(!r(e))return e;a=e}return a}listenPointerEvents(){const e=this.element[0],t=new Map;e.addEventListener("touchstart",(e=>e.preventDefault())),e.addEventListener("pointerdown",(n=>{var a,s;if(n.preventDefault(),(0,i.blurActiveElement)(),"button"==n.pointerType&&0!=n.button)return;const o=t.get(n.pointerId);null!=o&&(t.delete(n.pointerId),null===(a=this.onKeyUp)||void 0===a||a.call(this,o));const r=this.hitTest(n);null!=r&&(e.setPointerCapture(n.pointerId),t.set(n.pointerId,r),null===(s=this.onKeyDown)||void 0===s||s.call(this,r))})),e.addEventListener("pointermove",(n=>{var a,s;if(n.preventDefault(),e.hasPointerCapture(n.pointerId)){const e=t.get(n.pointerId),i=this.hitTest(n);null!=e&&null!=i&&e!=i&&(t.set(n.pointerId,i),null===(a=this.onKeyUp)||void 0===a||a.call(this,e),null===(s=this.onKeyDown)||void 0===s||s.call(this,i))}}));const n=e=>{var n;e.preventDefault();const a=t.get(e.pointerId);null!=a&&(t.delete(e.pointerId),null===(n=this.onKeyUp)||void 0===n||n.call(this,a))};e.addEventListener("lostpointercapture",n),e.addEventListener("pointercancel",n)}visibleKey(e){const t=this.keyMap.get(e);null!=t&&t.element[0].scrollIntoView({inline:"center"})}selectKey(e,t){const n=this.keyMap.get(e);null!=n&&(t?this.selectedKeySet.add(e):this.selectedKeySet.delete(e),n.isSelected=t)}}t.VirtualKeyboard=h;class l extends o.Component{constructor(e,t){super(),this.rect=e,this.element=$("<div>").addClass(t).css(Object.assign(Object.assign({},e.toCss()),{"--w":`${e.width}px`}))}set isSelected(e){this.element.toggleClass("selected",e)}}class c extends l{constructor(e,t){super(e,"white-key"),this.element.attr({"data-text":t})}}class p extends l{constructor(e){super(e,"black-key")}}},287:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Rect=void 0;const a=n(617);t.Rect=class{constructor(e,t,n,a){this.x=e,this.y=t,this.width=n,this.height=a}get left(){return this.x}get top(){return this.y}get right(){return this.x+this.width}get bottom(){return this.y+this.height}get center(){return new a.Vec2((this.left+this.right)/2,(this.top+this.bottom)/2)}get isEmpty(){return this.width<=0||this.height<=0}isPointInside(e){return e.x>=this.left&&e.x<this.right&&e.y>=this.top&&e.y<this.bottom}toCss(){return{left:`${this.left}px`,top:`${this.top}px`,width:`${this.width}px`,height:`${this.height}px`}}}},617:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Vec2=void 0;class n{constructor(e,t){this.x=e,this.y=t}static fromPointerEvent(e,t){const a=t.offset();return new n(e.pageX-a.left,e.pageY-a.top)}}t.Vec2=n},156:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(s,i){function o(e){try{h(a.next(e))}catch(e){i(e)}}function r(e){try{h(a.throw(e))}catch(e){i(e)}}function h(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}h((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=n(567),i=n(221);$((()=>{try{(new o).start()}catch(e){alert(e)}}));class o{constructor(){this.audioContext=new AudioContext({latencyHint:"interactive"})}start(){return a(this,void 0,void 0,(function*(){document.addEventListener("pointerdown",(()=>this.audioContext.resume()),!0),document.addEventListener("keydown",(()=>this.audioContext.resume()),!0),yield i.midiInManager.initialize(),yield this.audioContext.audioWorklet.addModule("synth.bundle.js");const e=new s.SynthBody(this.audioContext);$("main").append(e.element),e.scrollVirtualKeyboard()}))}}},221:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(s,i){function o(e){try{h(a.next(e))}catch(e){i(e)}}function r(e){try{h(a.throw(e))}catch(e){i(e)}}function h(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}h((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.midiInManager=void 0,t.midiInManager=new class{constructor(){this.midiInputs=[],this._curDevice=""}get names(){return this.midiInputs.map((e=>{var t;return null!==(t=e.name)&&void 0!==t?t:""}))}get curDeviceName(){return this._curDevice}set curDeviceName(e){var t;if(this._curDevice==e)return;this._curDevice=e;const n=e.length>0?this.midiInputs.findIndex((t=>t.name==e)):-1;for(let e=0;e<this.midiInputs.length;e++)this.midiInputs[e].onmidimessage=null,e==n&&(this.midiInputs[e].onmidimessage=e=>this.onMidiMessage(e));null===(t=this.onChangeCurDevice)||void 0===t||t.call(this)}initialize(){return n(this,void 0,void 0,(function*(){if(null==navigator.requestMIDIAccess)return!1;try{const e=yield navigator.requestMIDIAccess();return e.inputs.forEach((e=>this.midiInputs.push(e))),e.onstatechange=e=>{console.log("midi state change")},!0}catch(e){return!1}}))}onMidiMessage(e){var t,n,a,s;if(null==e.data||0==e.data.length)return;const[i,o,r]=e.data,h=240&e.data[0];if(144===h&&r>0)document.hidden||null===(t=this.onNoteOn)||void 0===t||t.call(this,o,r);else if(128===h||144===h&&0===r)null===(n=this.onNoteOff)||void 0===n||n.call(this,o);else if(224===h){const e=((r<<7|o)-8192)/8192;null===(a=this.onPitchBend)||void 0===a||a.call(this,e)}else if(176===h&&1===o){const e=r/127;null===(s=this.onModulation)||void 0===s||s.call(this,e)}}}},186:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.basic1SynthPatch=void 0;const a=n(705);t.basic1SynthPatch=Object.assign(Object.assign({},a.initSynthPatch),{name:"Basic 1",operatorsParams:[Object.assign(Object.assign({},a.initOperatorParams),{volume:1}),Object.assign(Object.assign({},a.initOperatorParams),{frequencyRatio:3,sendDepths:[1,0,0,0,0,0]}),a.initOperatorParams,a.initOperatorParams,a.initOperatorParams,a.initOperatorParams]})},705:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initSynthPatch=t.initOperatorsParams=t.initOperatorParams=void 0;const a=n(853);t.initOperatorParams={frequencyRatio:1,frequencyOffsetHz:0,sendDepths:[0,0,0,0,0,0],ampEnvelope:a.initEnvelopeParams,volume:0,pan:0},t.initOperatorsParams=[Object.assign(Object.assign({},t.initOperatorParams),{volume:1}),t.initOperatorParams,t.initOperatorParams,t.initOperatorParams,t.initOperatorParams,t.initOperatorParams],t.initSynthPatch={name:"Init",operatorsParams:t.initOperatorsParams,bendRange:2,modulationFrequency:5}},403:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.organ1SynthPatch=void 0;const a=n(705);t.organ1SynthPatch=Object.assign(Object.assign({},a.initSynthPatch),{name:"Organ 1",operatorsParams:[{frequencyRatio:2,frequencyOffsetHz:-.6,sendDepths:[0,.9542587685278997,0,0,0,0],ampEnvelope:{attackSec:0,attackShape:0,decaySec:0,decayShape:0,sustain:1,releaseSec:.001,releaseShape:0},volume:.39,pan:-.21212121212121213},{frequencyRatio:1,frequencyOffsetHz:0,sendDepths:[0,0,0,0,0,0],ampEnvelope:{attackSec:0,attackShape:0,decaySec:0,decayShape:0,sustain:1,releaseSec:.001,releaseShape:0},volume:.41,pan:-.1919191919191919},{frequencyRatio:2,frequencyOffsetHz:.4,sendDepths:[0,0,0,1.4254976665663686,0,0],ampEnvelope:{attackSec:0,attackShape:0,decaySec:0,decayShape:0,sustain:1,releaseSec:.001,releaseShape:0},volume:.2,pan:-.15151515151515152},{frequencyRatio:1,frequencyOffsetHz:0,sendDepths:[0,0,0,0,0,0],ampEnvelope:{attackSec:0,attackShape:0,decaySec:0,decayShape:0,sustain:1,releaseSec:.001,releaseShape:0},volume:.52,pan:.2828282828282828},{frequencyRatio:5.4969,frequencyOffsetHz:2e3,sendDepths:[0,0,0,0,0,.8848819307611251],ampEnvelope:{attackSec:0,attackShape:0,decaySec:0,decayShape:0,sustain:1,releaseSec:.001,releaseShape:0},volume:0,pan:0},{frequencyRatio:2,frequencyOffsetHz:0,sendDepths:[0,0,0,0,0,0],ampEnvelope:{attackSec:0,attackShape:0,decaySec:0,decayShape:0,sustain:1,releaseSec:.001,releaseShape:0},volume:.16,pan:0}]})},479:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.presets=void 0;const a=n(186),s=n(705),i=n(403);t.presets=[s.initSynthPatch,a.basic1SynthPatch,i.organ1SynthPatch]},93:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildPatchURL=s,t.savePatchToCurrentURL=function(e){const t=s(e);null!=t&&history.pushState(null,"",t)},t.loadPatchFromCurrentURL=function(){try{const e=new URL(location.href).searchParams;if("1"!=e.get("v"))return;const t=e.get("patch");if(null==t||0==t.length)return;return function(e){const t=JSON.parse(e);return{name:(n=t.name,s=a.initSynthPatch.name,"string"==typeof n?n:s),operatorsParams:[o(t.operatorsParams[0]),o(t.operatorsParams[1]),o(t.operatorsParams[2]),o(t.operatorsParams[3]),o(t.operatorsParams[4]),o(t.operatorsParams[5])],bendRange:i(t.bendRange,a.initSynthPatch.bendRange),modulationFrequency:i(t.modulationFrequency,a.initSynthPatch.modulationFrequency)};var n,s}(function(e){const t=atob(decodeURIComponent(e)),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return pako.inflate(n,{to:"string"})}(t))}catch(e){alert(e)}};const a=n(705);function s(e){try{const t=function(e){const t=pako.deflate(e);return encodeURIComponent(btoa(String.fromCharCode(...t)))}(JSON.stringify(e)),n=new URL(location.origin+location.pathname);return n.searchParams.append("patch",t),n.searchParams.append("v","1"),n.toString()}catch(e){alert(e)}}function i(e,t){return"number"!=typeof e||isNaN(e)?t:e}function o(e){return{frequencyRatio:i(e.frequencyRatio,a.initOperatorParams.frequencyRatio),frequencyOffsetHz:i(e.frequencyOffsetHz,a.initOperatorParams.frequencyOffsetHz),sendDepths:[i(e.sendDepths[0],a.initOperatorParams.sendDepths[0]),i(e.sendDepths[1],a.initOperatorParams.sendDepths[1]),i(e.sendDepths[2],a.initOperatorParams.sendDepths[2]),i(e.sendDepths[3],a.initOperatorParams.sendDepths[3]),i(e.sendDepths[4],a.initOperatorParams.sendDepths[4]),i(e.sendDepths[5],a.initOperatorParams.sendDepths[5])],ampEnvelope:{attackSec:i(e.ampEnvelope.attackSec,a.initOperatorParams.ampEnvelope.attackSec),attackShape:i(e.ampEnvelope.attackShape,a.initOperatorParams.ampEnvelope.attackShape),decaySec:i(e.ampEnvelope.decaySec,a.initOperatorParams.ampEnvelope.decaySec),decayShape:i(e.ampEnvelope.decayShape,a.initOperatorParams.ampEnvelope.decayShape),sustain:i(e.ampEnvelope.sustain,a.initOperatorParams.ampEnvelope.sustain),releaseSec:i(e.ampEnvelope.releaseSec,a.initOperatorParams.ampEnvelope.releaseSec),releaseShape:i(e.ampEnvelope.releaseShape,a.initOperatorParams.ampEnvelope.releaseShape)},volume:i(e.volume,a.initOperatorParams.volume),pan:i(e.pan,a.initOperatorParams.pan)}}},853:(e,t)=>{function n(e,t,n,a,s,i){if(i<e||i>n)return;const o=function(e,t){return 0===t?e:t>0?Math.pow(e,1+t):1-Math.pow(1-e,1-t)}((i-e)/(n-e),s);return t*(1-o)+a*o}Object.defineProperty(t,"__esModule",{value:!0}),t.initEnvelopeParams=t.shapeMax=t.shapeMin=void 0,t.interpolate=n,t.calcEnvelope=function e(t,a,s){var i;if(null!=s&&a>=s){if(0==t.releaseSec)return 0;const o=s;return n(o,null!==(i=e(t,s,void 0))&&void 0!==i?i:0,o+t.releaseSec,0,t.releaseShape,a)}return a<t.attackSec?n(0,0,t.attackSec,1,t.attackShape,a):a<t.attackSec+t.decaySec?n(t.attackSec,1,t.attackSec+t.decaySec,t.sustain,t.decayShape,a):t.sustain},t.shapeMin=-10,t.shapeMax=10,t.initEnvelopeParams={attackSec:0,attackShape:0,decaySec:0,decayShape:0,sustain:1,releaseSec:0,releaseShape:0}},311:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.fadeSecForClickNoise=t.operatorCount=void 0,t.convertOperatorParamsToEx=function(e){return Object.assign(Object.assign({},e),{ampEnvelope:Object.assign(Object.assign({},e.ampEnvelope),{attackSec:Math.max(e.ampEnvelope.attackSec,t.fadeSecForClickNoise),releaseSec:Math.max(e.ampEnvelope.releaseSec,t.fadeSecForClickNoise)}),sleep:e.sendDepths.every((e=>0==e))&&0==e.volume})},t.operatorCount=6,t.fadeSecForClickNoise=.001},12:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SynthProcessorWrapper=void 0,t.SynthProcessorWrapper=class{constructor(e){this.node=new AudioWorkletNode(e,"SynthProcessor",{outputChannelCount:[2]})}send(e){this.node.port.postMessage(e)}noteOn(e){this.send({type:"NoteOn",note:e})}noteOff(e){this.send({type:"NoteOff",note:e})}set pitchBend(e){this.send({type:"PitchBend",pitchBend:e})}set modulation(e){this.send({type:"Modulation",modulation:e})}set patch(e){this.send({type:"Patch",patch:e})}set polyphony(e){this.send({type:"Polyphony",polyphony:Math.floor(e)})}}},438:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tinyFM1LocalStorage=void 0;const a=n(230),s="tine-fm-1";t.tinyFM1LocalStorage=new class{constructor(){this._midiInName="",this._masterVol=a.masterVolumeDefault,this._polyphony=a.polyphonyDefault,this.load()}get midiInName(){return this._midiInName}set midiInName(e){this._midiInName=e,this.save()}get masterVolume(){return this._masterVol}set masterVolume(e){this._masterVol=e,this.save()}get polyphony(){return this._polyphony}set polyphony(e){this._polyphony=e,this.save()}load(){try{const e=localStorage.getItem(s);if(null==e)return;const t=JSON.parse(e);if(null==t)return;this._midiInName=t.midiInName,this._masterVol=t.masterVol,this._polyphony=t.polyphony}catch(e){console.error(e)}}save(){const e={midiInName:this._midiInName,masterVol:this._masterVol,polyphony:this._polyphony};try{localStorage.setItem(s,JSON.stringify(e))}catch(e){console.error(e)}}}},303:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.blurActiveElement=function(){const e=document.activeElement;e instanceof HTMLElement&&e.blur()}}},t={};!function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}(156)})();