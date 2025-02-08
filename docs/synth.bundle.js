/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/synth.ts":
/*!**********************!*\
  !*** ./src/synth.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst synthProcessor_1 = __webpack_require__(/*! ./synth/synthProcessor */ \"./src/synth/synthProcessor.ts\");\nregisterProcessor(\"SynthProcessor\", synthProcessor_1.SynthProcessor);\n\n\n//# sourceURL=webpack://websynthtest01/./src/synth.ts?");

/***/ }),

/***/ "./src/synth/synthProcessor.ts":
/*!*************************************!*\
  !*** ./src/synth/synthProcessor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SynthProcessor = void 0;\nfunction midiNoteToFrequency(note) {\n    return 440 * Math.pow(2, (note - 69 /* MidiNote.A4 */) / 12);\n}\nfunction convertModulationAmplitude(v) {\n    return v * v / 4800 * PI2;\n}\nconst PI2 = 2 * Math.PI;\nclass Oscillator {\n    constructor(ratio = 1, offset = 0) {\n        this.ratio = ratio;\n        this.offset = offset;\n        this.phase = 0;\n    }\n    getValue(fm = 0) {\n        return Math.sin(this.phase * PI2 + fm);\n    }\n    addPhase(baseFrequency) {\n        this.phase += (baseFrequency * this.ratio + this.offset) / sampleRate;\n        this.phase %= 1;\n    }\n}\nlet testVal = 0;\n/**\n * 線形パンニングです。\n * @param input モノラル入力\n * @param pan パン(-1.0～1.0)\n * @param output 出力\n */\nfunction panning(input, pan, output) {\n    output[0] += input * (1 - pan) / 2;\n    output[1] += input * (1 + pan) / 2;\n}\n/** キーボードの1音に対応する音を管理するものです。 */\nclass SynthNote {\n    constructor(note) {\n        this.mod = new Oscillator(1, 0);\n        this.frequency = midiNoteToFrequency(note);\n        this.oscA = new Oscillator(2, -0.6);\n        this.oscB = new Oscillator();\n        this.oscC = new Oscillator(2, 0.4);\n        this.oscD = new Oscillator();\n        this.oscE = new Oscillator(5.4969, 2000);\n        this.oscF = new Oscillator(2);\n    }\n    generateSample(output) {\n        this.mod.addPhase(5);\n        const freq = this.frequency + this.mod.getValue() * 2;\n        this.oscA.addPhase(freq);\n        this.oscB.addPhase(freq);\n        this.oscC.addPhase(freq);\n        this.oscD.addPhase(freq);\n        this.oscE.addPhase(freq);\n        this.oscF.addPhase(freq);\n        const val = (this.oscA.getValue() * 0.43 +\n            this.oscB.getValue(this.oscA.getValue() * convertModulationAmplitude(27)) * 0.41 +\n            this.oscC.getValue() * 0.20 +\n            this.oscD.getValue(this.oscC.getValue() * convertModulationAmplitude(33)) * 0.52 +\n            this.oscF.getValue(this.oscE.getValue() * convertModulationAmplitude(27)) * 0.16);\n        //output[0] += val;\n        panning(val, testVal, output);\n    }\n}\nclass SynthProcessor extends AudioWorkletProcessor {\n    constructor() {\n        super();\n        this.synthNoteMap = new Map();\n        this.listenMessages();\n    }\n    process(inputs, outputs, parameters) {\n        const output = outputs[0];\n        const leftChannel = output[0];\n        const rightChannel = output[1];\n        const masterVolume = 0.2;\n        for (let i = 0; i < leftChannel.length; i++) {\n            const wave = [0, 0];\n            for (const note of this.synthNoteMap.values()) {\n                note.generateSample(wave);\n            }\n            leftChannel[i] = wave[0] * masterVolume;\n            rightChannel[i] = wave[1] * masterVolume;\n        }\n        return true;\n    }\n    listenMessages() {\n        this.port.onmessage = e => {\n            const msg = e.data;\n            //console.log(e.data);\n            switch (msg.type) {\n                case \"NoteOn\":\n                    this.noteOn(msg.note);\n                    break;\n                case \"NoteOff\":\n                    this.noteOff(msg.note);\n                    break;\n                case \"Test\":\n                    testVal = msg.val;\n                    break;\n            }\n        };\n    }\n    noteOn(note) {\n        const oldNote = this.synthNoteMap.get(note);\n        if (oldNote != null) {\n            return;\n        }\n        this.synthNoteMap.set(note, new SynthNote(note));\n    }\n    noteOff(note) {\n        const synthNote = this.synthNoteMap.get(note);\n        if (synthNote == null) {\n            return;\n        }\n        this.synthNoteMap.delete(note);\n    }\n}\nexports.SynthProcessor = SynthProcessor;\n\n\n//# sourceURL=webpack://websynthtest01/./src/synth/synthProcessor.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/synth.ts");
/******/ 	
/******/ })()
;