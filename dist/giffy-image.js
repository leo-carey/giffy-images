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

/***/ "./src/GiffyImages.js":
/*!****************************!*\
  !*** ./src/GiffyImages.js ***!
  \****************************/
/***/ (() => {

eval("\n\nclass GiffyImages {\n    constructor({ imageHolderId, timer = 50, autoplay = false }) {\n        this.timer = timer\n        this.autoplay = autoplay\n        this._images = document.getElementById(imageHolderId).children\n\n        this.animate = null\n        this.counter = 0\n        this.isPlaying = 0\n\n        if(this.autoplay) {\n            this.playStop()\n        }\n    }\n\n    play() {\n        this.isPlaying = 1;\n\t\tthis.animate = setInterval(this.#_playAnimation.bind(this), this.timer);\n    }\n\n    stop() {\n        this.isPlaying = 0;\n        clearInterval(this.animate);\n    }\n\n    playStop () {\n        if (this.isPlaying == 1) {\n\t\t\tthis.stop()\n\t\t} else {\n\t\t\tthis.play()\n\t\t}\n    }\n\n    #_playAnimation() {\n        if (this.counter === 0) {\n            this._images[0].style.display = 'block'\n            this._images[this._images.length - 1].style.display = 'none'\n        } else {\n            this._images[this.counter - 1].style.display = 'none'\n            this._images[this.counter].style.display = 'block'\n        }\n\n        if (this.counter !== this._images.length - 1)\n            this.counter += 1;\n        else\n            this.counter = 0;\n\n    }\n}\n\n\n//# sourceURL=webpack://giffy-images/./src/GiffyImages.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/GiffyImages.js"]();
/******/ 	
/******/ })()
;