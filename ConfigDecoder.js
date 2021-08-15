var ConfigDecoder =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Config = __webpack_require__(/*! ./src/Config */ \"./src/Config.js\");\r\n\r\nfunction decode(encodedConfig) {\r\n  return new Config[\"default\"](encodedConfig, 'configuration_pack.json').decode();\r\n}\r\n\r\nexports.__esModule = true;\r\nmodule.exports = {\r\n  decode: decode\r\n};\n\n//# sourceURL=webpack://ConfigDecoder/./index.js?");

/***/ }),

/***/ "./src/Config.js":
/*!***********************!*\
  !*** ./src/Config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar A2F_1 = __webpack_require__(/*! ./exported/A2F */ \"./src/exported/A2F.js\");\r\nvar A3b_1 = __webpack_require__(/*! ./exported/A3b */ \"./src/exported/A3b.js\");\r\nvar A6e_1 = __webpack_require__(/*! ./exported/A6e */ \"./src/exported/A6e.js\");\r\nvar A6I_1 = __webpack_require__(/*! ./exported/A6I */ \"./src/exported/A6I.js\");\r\nvar A7L_1 = __webpack_require__(/*! ./exported/A7L */ \"./src/exported/A7L.js\");\r\nvar A8j_1 = __webpack_require__(/*! ./exported/A8j */ \"./src/exported/A8j.js\");\r\nvar B0L_1 = __webpack_require__(/*! ./exported/B0L */ \"./src/exported/B0L.js\");\r\nvar B0p_1 = __webpack_require__(/*! ./exported/B0p */ \"./src/exported/B0p.js\");\r\nvar processFilename_1 = __webpack_require__(/*! ./exported/processFilename */ \"./src/exported/processFilename.js\");\r\nvar tB0l_1 = __webpack_require__(/*! ./exported/tB0l */ \"./src/exported/tB0l.js\");\r\nvar DATA_STR = '\"data\":\"';\r\nvar Config = /** @class */ (function () {\r\n    function Config(content, filename) {\r\n        if (filename === void 0) { filename = 'configuration_pack.json'; }\r\n        this.content = content;\r\n        this.dataOffset = content.indexOf(DATA_STR) + DATA_STR.length;\r\n        this.dataEndOffset = content.indexOf('\"', this.dataOffset);\r\n        if (this.dataEndOffset - this.dataOffset < 128)\r\n            throw new Error();\r\n        this.filenameKey = processFilename_1[\"default\"](filename);\r\n    }\r\n    Config.prototype.decode = function () {\r\n        var state = this.createScript(this.filenameKey).reduce(function (stepState, fn) { return fn(stepState); }, A8j_1[\"default\"](this.content, this.dataOffset, this.dataEndOffset));\r\n        var result = A6e_1[\"default\"](state);\r\n        result[0] = JSON.parse(result[0]);\r\n        return result;\r\n    };\r\n    Config.prototype.createScript = function (filenameKey) {\r\n        return [\r\n            A3b_1[\"default\"].bind(null, 0),\r\n            B0p_1[\"default\"].bind(null, filenameKey),\r\n            A7L_1[\"default\"].bind(null, filenameKey),\r\n            A6I_1[\"default\"].bind(null, filenameKey),\r\n            A2F_1[\"default\"],\r\n            B0L_1[\"default\"].bind(null, filenameKey),\r\n            A3b_1[\"default\"].bind(null, 1),\r\n            A3b_1[\"default\"].bind(null, 2),\r\n            A3b_1[\"default\"].bind(null, 3),\r\n            tB0l_1[\"default\"].bind(null, filenameKey),\r\n        ];\r\n    };\r\n    return Config;\r\n}());\r\nexports[\"default\"] = Config;\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/Config.js?");

/***/ }),

/***/ "./src/arraySwap.js":
/*!**************************!*\
  !*** ./src/arraySwap.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nfunction arraySwap(array, index1, index2) {\r\n    var tmp = array[index1];\r\n    array[index1] = array[index2];\r\n    array[index2] = tmp;\r\n}\r\nexports[\"default\"] = arraySwap;\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/arraySwap.js?");

/***/ }),

/***/ "./src/exported/A2F.js":
/*!*****************************!*\
  !*** ./src/exported/A2F.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports[\"default\"] = (function (_a) {\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    var v_dmi = Math.min(32, contentLength);\r\n    var v_6mi, v_7mi;\r\n    for (var i = 0; i < v_dmi; i++) {\r\n        var v_8mi = content[i] ^ key1[i] ^ key2[i] ^ key3[i];\r\n        switch (v_8mi & 12) {\r\n            case 0:\r\n                v_6mi = key1[i];\r\n                break;\r\n            case 4:\r\n                v_6mi = key2[i];\r\n                break;\r\n            case 8:\r\n                v_6mi = key3[i];\r\n                break;\r\n            case 12:\r\n                v_6mi = content[i];\r\n        }\r\n        switch (v_8mi & 3) {\r\n            case 0:\r\n                v_7mi = key1[i];\r\n                key1[i] = v_6mi;\r\n                break;\r\n            case 1:\r\n                v_7mi = key2[i];\r\n                key2[i] = v_6mi;\r\n                break;\r\n            case 2:\r\n                v_7mi = key3[i];\r\n                key3[i] = v_6mi;\r\n                break;\r\n            case 3:\r\n                v_7mi = content[i];\r\n                content[i] = v_6mi;\r\n        }\r\n        switch (v_8mi & 12) {\r\n            case 0:\r\n                key1[i] = v_7mi;\r\n                break;\r\n            case 4:\r\n                key2[i] = v_7mi;\r\n                break;\r\n            case 8:\r\n                key3[i] = v_7mi;\r\n                break;\r\n            case 12:\r\n                content[i] = v_7mi;\r\n        }\r\n        switch (v_8mi & 192) {\r\n            case 0:\r\n                v_6mi = key1[i];\r\n                break;\r\n            case 64:\r\n                v_6mi = key2[i];\r\n                break;\r\n            case 128:\r\n                v_6mi = key3[i];\r\n                break;\r\n            case 192:\r\n                v_6mi = content[i];\r\n        }\r\n        switch (v_8mi & 48) {\r\n            case 0:\r\n                v_7mi = key1[i];\r\n                key1[i] = v_6mi;\r\n                break;\r\n            case 16:\r\n                v_7mi = key2[i];\r\n                key2[i] = v_6mi;\r\n                break;\r\n            case 32:\r\n                v_7mi = key3[i];\r\n                key3[i] = v_6mi;\r\n                break;\r\n            case 48:\r\n                v_7mi = content[i];\r\n                content[i] = v_6mi;\r\n        }\r\n        switch (v_8mi & 192) {\r\n            case 0:\r\n                key1[i] = v_7mi;\r\n                break;\r\n            case 64:\r\n                key2[i] = v_7mi;\r\n                break;\r\n            case 128:\r\n                key3[i] = v_7mi;\r\n                break;\r\n            case 192:\r\n                content[i] = v_7mi;\r\n        }\r\n    }\r\n    return [content, contentLength, key1, key2, key3];\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/A2F.js?");

/***/ }),

/***/ "./src/exported/A3b.js":
/*!*****************************!*\
  !*** ./src/exported/A3b.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar arraySwap_1 = __webpack_require__(/*! ../arraySwap */ \"./src/arraySwap.js\");\r\n// tslint:disable-next-line:max-func-body-length\r\nexports[\"default\"] = (function (v_ofi, _a) {\r\n    var _b, _c;\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    var v_jki = [], v_kki = 0, v_lki = [], v_mki = [], v_nki = [], v_oki = 0;\r\n    switch (v_ofi) {\r\n        case 3:\r\n            v_jki = key1;\r\n            v_kki = 32;\r\n            v_oki = 32;\r\n            v_lki = key2;\r\n            v_mki = key3;\r\n            v_nki = null;\r\n            break;\r\n        case 2:\r\n            v_jki = key2;\r\n            v_kki = 32;\r\n            v_oki = 32;\r\n            v_lki = key1;\r\n            v_mki = key3;\r\n            v_nki = null;\r\n            break;\r\n        case 1:\r\n            v_jki = key3;\r\n            v_kki = 32;\r\n            v_oki = 32;\r\n            v_lki = key1;\r\n            v_mki = key2;\r\n            v_nki = null;\r\n            break;\r\n        case 0:\r\n            v_jki = content;\r\n            v_kki = contentLength;\r\n            v_oki = 65536;\r\n            v_lki = key1;\r\n            v_mki = key2;\r\n            v_nki = key3;\r\n            break;\r\n    }\r\n    var _d = process1(0, 0, v_lki), v_0li = _d[0], v_1li = _d[1];\r\n    _b = process1(v_0li, v_1li, v_mki), v_0li = _b[0], v_1li = _b[1];\r\n    if (v_nki)\r\n        _c = process1(v_0li, v_1li, v_nki), v_0li = _c[0], v_1li = _c[1];\r\n    var v_0liFlag2 = !check1(v_0li, 2), v_0liFlag4 = !check1(v_0li, 4), v_0liFlag8 = !check1(v_0li, 8), v_5li = v_1li >>> 5, v_6li = 8 - v_5li;\r\n    var v_7li = 0;\r\n    var v_gli = [];\r\n    for (var v_pli = v_7li + 32, v_qli = void 0, v_rli = void 0, v_sli = void 0, v_tli = void 0, v_uli = void 0, v_wli = void 0, v_xli = void 0, v_zli = void 0; v_7li < v_kki;) {\r\n        for (v_pli = v_7li + 32,\r\n            v_qli = v_pli > v_kki,\r\n            v_qli ? ((v_pli = v_kki), (v_rli = v_pli - v_7li)) : (v_rli = 32),\r\n            v_wli = v_0li,\r\n            v_xli = v_1li,\r\n            v_tli = 0,\r\n            v_uli = v_7li; v_tli < v_rli;) {\r\n            v_sli = v_jki[v_uli++];\r\n            if (v_0liFlag2)\r\n                v_sli = ((v_sli & 85) << 1) | ((v_sli >>> 1) & 85);\r\n            if (v_0liFlag4)\r\n                v_sli = ((v_sli & 51) << 2) | ((v_sli >>> 2) & 51);\r\n            if (v_0liFlag8)\r\n                v_sli = ((v_sli & 15) << 4) | ((v_sli >>> 4) & 15);\r\n            v_gli[v_tli++] = v_sli;\r\n            v_wli = (v_wli + v_sli) & 255;\r\n            v_xli ^= v_sli;\r\n        }\r\n        for (var j = 0; j < v_rli; j++) {\r\n            for (var i = 1; i <= 6; i++) {\r\n                var a = Math.pow(2, i);\r\n                if (!check1(j, a - 1))\r\n                    break;\r\n                if (!check1(v_wli, a))\r\n                    process2(j - Math.pow(2, i - 1), j, v_gli);\r\n            }\r\n        }\r\n        v_zli = v_xli >>> 3;\r\n        v_qli ? (v_zli %= v_rli) : (v_zli &= 31);\r\n        if (v_5li === 0) {\r\n            for (var i = v_7li, j = v_rli - v_zli; i < v_pli;) {\r\n                if (j === v_rli)\r\n                    j = 0;\r\n                v_jki[i++] = v_gli[j++];\r\n            }\r\n        }\r\n        else {\r\n            for (var i = v_7li, j = v_rli - v_zli - 1; i < v_pli;) {\r\n                v_sli = v_gli[j] << v_6li;\r\n                if (++j === v_rli)\r\n                    j = 0;\r\n                v_sli |= v_gli[j] >>> v_5li;\r\n                v_jki[i++] = v_sli & 255;\r\n            }\r\n        }\r\n        v_7li = v_pli;\r\n    }\r\n    return [content, contentLength, key1, key2, key3];\r\n});\r\nfunction process1(v_0li, v_1li, key) {\r\n    for (var i = 0; i < 32; i++) {\r\n        v_0li = (v_0li + key[i]) & 255;\r\n        v_1li ^= key[i];\r\n    }\r\n    return [v_0li, v_1li];\r\n}\r\nfunction process2(v_yli, v_uli, v_gli) {\r\n    for (var v_vli = v_yli; v_uli > v_yli; v_uli--, v_vli--) {\r\n        arraySwap_1[\"default\"](v_gli, v_uli, v_vli);\r\n    }\r\n}\r\nvar check1 = function (n, m) { return (n & m) === m; };\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/A3b.js?");

/***/ }),

/***/ "./src/exported/A6I.js":
/*!*****************************!*\
  !*** ./src/exported/A6I.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/exported/index.js\");\r\nvar processContentStep_1 = __webpack_require__(/*! ./processContentStep */ \"./src/exported/processContentStep.js\");\r\nexports[\"default\"] = (function (filenameKey, _a) {\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    var i = (contentLength - 1) & -2;\r\n    var key = index_1.v_qmi(key3, filenameKey, key1);\r\n    return processContentStep_1[\"default\"]([content, contentLength, key1, key2, key3], key, i);\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/A6I.js?");

/***/ }),

/***/ "./src/exported/A6e.js":
/*!*****************************!*\
  !*** ./src/exported/A6e.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.keyToStr = void 0;\r\nexports[\"default\"] = (function (_a) {\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    var decodedContent = [];\r\n    for (var contentOffset = 0; contentOffset < contentLength;) {\r\n        var char = content[contentOffset++];\r\n        if (char < 128) {\r\n            decodedContent.push(char);\r\n            continue;\r\n        }\r\n        var v_zgi = content[contentOffset];\r\n        if (contentOffset >= contentLength ||\r\n            char < 194 ||\r\n            char > 244 ||\r\n            !isPassCheck1(v_zgi) ||\r\n            (char === 224 && v_zgi < 160) ||\r\n            (char === 237 && v_zgi >= 160) ||\r\n            (char === 240 && v_zgi < 144) ||\r\n            (char === 244 && v_zgi >= 144)) {\r\n            decodedContent.push(65533);\r\n            continue;\r\n        }\r\n        contentOffset++;\r\n        if (char < 224) {\r\n            decodedContent.push((v_zgi & 63) | ((char & 31) << 6));\r\n            continue;\r\n        }\r\n        var v_0hi = content[contentOffset];\r\n        if (contentOffset >= contentLength || !isPassCheck1(v_0hi)) {\r\n            decodedContent.push(65533);\r\n            continue;\r\n        }\r\n        contentOffset++;\r\n        if (char < 240) {\r\n            decodedContent.push((v_0hi & 63) | ((v_zgi & 63) << 6) | ((char & 15) << 12));\r\n            continue;\r\n        }\r\n        var v_1hi = content[contentOffset];\r\n        if (contentOffset >= contentLength || !isPassCheck1(v_1hi)) {\r\n            decodedContent.push(65533);\r\n            continue;\r\n        }\r\n        contentOffset++;\r\n        var v_2hi = ((v_0hi & 48) >> 4) | ((v_zgi & 63) << 2) | ((char & 7) << 8);\r\n        var v_3hi = (v_1hi & 63) | ((v_0hi & 15) << 6);\r\n        decodedContent.push(55232 + v_2hi);\r\n        decodedContent.push(56320 + v_3hi);\r\n    }\r\n    return [\r\n        decodedContent.map(function (v) { return String.fromCharCode(v); }).join(''),\r\n        keyToStr(key1),\r\n        keyToStr(key2),\r\n        keyToStr(key3),\r\n        key1,\r\n        key2,\r\n        key3,\r\n    ];\r\n});\r\nfunction keyToStr(key) {\r\n    var v_khi = new Array(64);\r\n    for (var i = 0, offset = 0; i < 32; i++) {\r\n        v_khi[offset++] = keyToStrProcessValue(key[i] >>> 4);\r\n        v_khi[offset++] = keyToStrProcessValue(key[i] & 15);\r\n    }\r\n    return String.fromCharCode.apply(String, v_khi);\r\n}\r\nexports.keyToStr = keyToStr;\r\nfunction keyToStrProcessValue(v_ihi) {\r\n    return (v_ihi < 10 ? 48 : 87) + v_ihi;\r\n}\r\nvar isPassCheck1 = function (v_0hi) { return (v_0hi & 192) === 128; };\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/A6e.js?");

/***/ }),

/***/ "./src/exported/A7L.js":
/*!*****************************!*\
  !*** ./src/exported/A7L.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/exported/index.js\");\r\nvar processContentStep_1 = __webpack_require__(/*! ./processContentStep */ \"./src/exported/processContentStep.js\");\r\nexports[\"default\"] = (function (filenameKey, _a) {\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    var i = (contentLength | 1) - 2;\r\n    var key = index_1.v_qmi(filenameKey, key1, key2);\r\n    return processContentStep_1[\"default\"]([content, contentLength, key1, key2, key3], key, i);\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/A7L.js?");

/***/ }),

/***/ "./src/exported/A8f.js":
/*!*****************************!*\
  !*** ./src/exported/A8f.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar ARR1 = [\r\n    'A',\r\n    'B',\r\n    'C',\r\n    'D',\r\n    'E',\r\n    'F',\r\n    'G',\r\n    'H',\r\n    'I',\r\n    'J',\r\n    'K',\r\n    'L',\r\n    'M',\r\n    'N',\r\n    'O',\r\n    'P',\r\n    'Q',\r\n    'R',\r\n    'S',\r\n    'T',\r\n    'U',\r\n    'V',\r\n    'W',\r\n    'X',\r\n    'Y',\r\n    'Z',\r\n    'a',\r\n    'b',\r\n    'c',\r\n    'd',\r\n    'e',\r\n    'f',\r\n    'g',\r\n    'h',\r\n    'i',\r\n    'j',\r\n    'k',\r\n    'l',\r\n    'm',\r\n    'n',\r\n    'o',\r\n    'p',\r\n    'q',\r\n    'r',\r\n    's',\r\n    't',\r\n    'u',\r\n    'v',\r\n    'w',\r\n    'x',\r\n    'y',\r\n    'z',\r\n    '0',\r\n    '1',\r\n    '2',\r\n    '3',\r\n    '4',\r\n    '5',\r\n    '6',\r\n    '7',\r\n    '8',\r\n    '9',\r\n    '+',\r\n    '/',\r\n], ARR2 = [\r\n    65,\r\n    66,\r\n    67,\r\n    68,\r\n    69,\r\n    70,\r\n    71,\r\n    72,\r\n    73,\r\n    74,\r\n    75,\r\n    76,\r\n    77,\r\n    78,\r\n    79,\r\n    80,\r\n    81,\r\n    82,\r\n    83,\r\n    84,\r\n    85,\r\n    86,\r\n    87,\r\n    88,\r\n    89,\r\n    90,\r\n    97,\r\n    98,\r\n    99,\r\n    100,\r\n    101,\r\n    102,\r\n    103,\r\n    104,\r\n    105,\r\n    106,\r\n    107,\r\n    108,\r\n    109,\r\n    110,\r\n    111,\r\n    112,\r\n    113,\r\n    114,\r\n    115,\r\n    116,\r\n    117,\r\n    118,\r\n    119,\r\n    120,\r\n    121,\r\n    122,\r\n    48,\r\n    49,\r\n    50,\r\n    51,\r\n    52,\r\n    53,\r\n    54,\r\n    55,\r\n    56,\r\n    57,\r\n    43,\r\n    47,\r\n];\r\nvar v_3kj = [], // v_3kj это полная копия ARR1\r\nv_4kj = [], v_5kj = [], v_6kj = [], v_7kj = [], v_8kj = [], v_9kj = [], v_akj = [];\r\nfor (var index = 0; index < 64; index++) {\r\n    var v_bkj = ARR2[index];\r\n    v_3kj[index] = ARR1[index];\r\n    v_4kj[v_bkj] = index;\r\n    v_5kj[v_bkj] = index << 2;\r\n    v_6kj[v_bkj] = (index << 4) & 255;\r\n    v_7kj[v_bkj] = (index << 6) & 255;\r\n    v_8kj[v_bkj] = index >> 2;\r\n    v_9kj[v_bkj] = index >> 4;\r\n    v_akj[v_bkj] = true;\r\n}\r\nvar A8f = [v_4kj, v_5kj, v_6kj, v_7kj, v_8kj, v_9kj, v_akj];\r\nexports[\"default\"] = A8f;\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/A8f.js?");

/***/ }),

/***/ "./src/exported/A8j.js":
/*!*****************************!*\
  !*** ./src/exported/A8j.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar A8f_1 = __webpack_require__(/*! ./A8f */ \"./src/exported/A8f.js\");\r\n// tslint:no-shadowed-variable\r\nexports[\"default\"] = (function (content, dataOffset, dataEndOffset) {\r\n    var arrayLength = 32;\r\n    var keyDataLength = 128;\r\n    var payloadOffset = dataOffset + keyDataLength, payloadLength = dataEndOffset - payloadOffset;\r\n    if (payloadLength & 3)\r\n        throw new Error();\r\n    var v_4ii = new Array(arrayLength), v_5ii = new Array(arrayLength), v_6ii = new Array(arrayLength);\r\n    for (var i = dataOffset, activeArray = v_4ii, activeArrayIndex = 0; i < payloadOffset;) {\r\n        var a = content.charCodeAt(i++), b = content.charCodeAt(i++), c = content.charCodeAt(i++), d = content.charCodeAt(i++);\r\n        if (!(A8f_1[\"default\"][6][a] && A8f_1[\"default\"][6][b] && A8f_1[\"default\"][6][c] && A8f_1[\"default\"][6][d]))\r\n            throw new Error();\r\n        activeArray[activeArrayIndex++] = A8f_1[\"default\"][1][a] | A8f_1[\"default\"][5][b];\r\n        if (i === dataOffset + 88) {\r\n            activeArray = v_6ii;\r\n            activeArrayIndex = 0;\r\n        }\r\n        activeArray[activeArrayIndex++] = A8f_1[\"default\"][2][b] | A8f_1[\"default\"][4][c];\r\n        if (i === dataOffset + 44) {\r\n            activeArray = v_5ii;\r\n            activeArrayIndex = 0;\r\n        }\r\n        activeArray[activeArrayIndex++] = A8f_1[\"default\"][3][c] | A8f_1[\"default\"][0][d];\r\n    }\r\n    if (payloadLength === 0) {\r\n        return [new Uint8Array(0), 0, v_4ii, v_5ii, v_6ii];\r\n    }\r\n    var resultLength = (payloadLength * 3) >> 2;\r\n    if (content.charCodeAt(dataEndOffset - 2) === 61) {\r\n        resultLength -= 2;\r\n    }\r\n    else if (content.charCodeAt(dataEndOffset - 1) === 61) {\r\n        resultLength -= 1;\r\n    }\r\n    var result = new Uint8Array(resultLength);\r\n    var chuckOffset = payloadOffset, index = 0;\r\n    for (; chuckOffset < dataEndOffset - 4;) {\r\n        var c1 = content.charCodeAt(chuckOffset++), c2 = content.charCodeAt(chuckOffset++), c3 = content.charCodeAt(chuckOffset++), c4 = content.charCodeAt(chuckOffset++);\r\n        if (!(A8f_1[\"default\"][6][c1] && A8f_1[\"default\"][6][c2] && A8f_1[\"default\"][6][c3] && A8f_1[\"default\"][6][c4]))\r\n            throw new Error();\r\n        result[index++] = A8f_1[\"default\"][1][c1] | A8f_1[\"default\"][5][c2];\r\n        result[index++] = A8f_1[\"default\"][2][c2] | A8f_1[\"default\"][4][c3];\r\n        result[index++] = A8f_1[\"default\"][3][c3] | A8f_1[\"default\"][0][c4];\r\n    }\r\n    var v_uii = content.charCodeAt(chuckOffset++), v_vii = content.charCodeAt(chuckOffset++), v_wii = content.charCodeAt(chuckOffset++), v_xii = content.charCodeAt(chuckOffset++);\r\n    if (!A8f_1[\"default\"][6][v_uii] || !A8f_1[\"default\"][6][v_vii])\r\n        throw new Error();\r\n    result[index++] = A8f_1[\"default\"][1][v_uii] | A8f_1[\"default\"][5][v_vii];\r\n    if (A8f_1[\"default\"][6][v_wii]) {\r\n        result[index++] = A8f_1[\"default\"][2][v_vii] | A8f_1[\"default\"][4][v_wii];\r\n        if (A8f_1[\"default\"][6][v_xii]) {\r\n            result[index++] = A8f_1[\"default\"][3][v_wii] | A8f_1[\"default\"][0][v_xii];\r\n        }\r\n        else if (v_xii !== 61) {\r\n            throw new Error();\r\n        }\r\n    }\r\n    else if (v_wii !== 61 || v_xii !== 61) {\r\n        throw new Error();\r\n    }\r\n    return [result, resultLength, v_4ii, v_5ii, v_6ii];\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/A8j.js?");

/***/ }),

/***/ "./src/exported/B0L.js":
/*!*****************************!*\
  !*** ./src/exported/B0L.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/exported/index.js\");\r\nexports[\"default\"] = (function (filenameKey, _a) {\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    key3 = index_1.v_smi(key3, key2, key1, filenameKey);\r\n    key2 = index_1.v_smi(key2, key1, filenameKey, key3);\r\n    key1 = index_1.v_smi(key1, filenameKey, key3, key2);\r\n    return [content, contentLength, key1, key2, key3];\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/B0L.js?");

/***/ }),

/***/ "./src/exported/B0p.js":
/*!*****************************!*\
  !*** ./src/exported/B0p.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/exported/index.js\");\r\nexports[\"default\"] = (function (filenameKey, _a) {\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    var key = index_1.v_qmi(key2, filenameKey, key3);\r\n    for (var offset = 0, v_omi = 0; offset < contentLength; v_omi %= 256) {\r\n        content[offset++] ^= key[v_omi++];\r\n    }\r\n    return [content, contentLength, key1, key2, key3];\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/B0p.js?");

/***/ }),

/***/ "./src/exported/a0F.js":
/*!*****************************!*\
  !*** ./src/exported/a0F.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar arraySwap_1 = __webpack_require__(/*! ../arraySwap */ \"./src/arraySwap.js\");\r\n// a0F && a0FBin\r\nexports[\"default\"] = (function (input) {\r\n    var result = new Array(256).fill(0).map(function (_, index) { return index; });\r\n    var getFromInput = typeof input === 'string' ? input.charCodeAt.bind(input) : function (index) { return input[index]; };\r\n    for (var c = 0, i = 0; i < 256; i++) {\r\n        var index = i % input.length;\r\n        c = (c + result[i] + getFromInput(index)) % 256;\r\n        arraySwap_1[\"default\"](result, i, c);\r\n    }\r\n    return result;\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/a0F.js?");

/***/ }),

/***/ "./src/exported/a0g.js":
/*!*****************************!*\
  !*** ./src/exported/a0g.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar arraySwap_1 = __webpack_require__(/*! ../arraySwap */ \"./src/arraySwap.js\");\r\nvar a0F_1 = __webpack_require__(/*! ./a0F */ \"./src/exported/a0F.js\");\r\nexports[\"default\"] = (function (key, b) {\r\n    var result = [];\r\n    var g = a0F_1[\"default\"](b);\r\n    for (var i = 0, c = 0, d = 0; i < key.length; i++) {\r\n        c = (c + 1) % 256;\r\n        d = (d + g[c]) % 256;\r\n        arraySwap_1[\"default\"](g, c, d);\r\n        var e = (g[c] + g[d]) % 256;\r\n        result.push(key[i] ^ g[e]);\r\n    }\r\n    return result;\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/a0g.js?");

/***/ }),

/***/ "./src/exported/index.js":
/*!*******************************!*\
  !*** ./src/exported/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nexports.__esModule = true;\r\nexports.readJsonFile = exports.createTA8jResult = exports.isEqual = exports.arraySum = exports.v_smi = exports.v_qmi = exports.v_ifi = void 0;\r\n// var chai_1 = require(\"chai\");\r\n// var fs_1 = require(\"fs\");\r\nvar a0F_1 = __webpack_require__(/*! ./a0F */ \"./src/exported/a0F.js\");\r\nvar a0g_1 = __webpack_require__(/*! ./a0g */ \"./src/exported/a0g.js\");\r\nfunction v_ifi(fn) {\r\n    // tslint:disable-next-line:no-constant-condition\r\n    while (true) {\r\n        var result = fn();\r\n        if (result === undefined)\r\n            continue;\r\n        return result;\r\n    }\r\n}\r\nexports.v_ifi = v_ifi;\r\nfunction v_qmi(p1, p2, p3) {\r\n    return a0F_1[\"default\"](__spreadArray(__spreadArray(__spreadArray([], p1), p2), p3));\r\n}\r\nexports.v_qmi = v_qmi;\r\nfunction v_smi(content, p1, p2, p3) {\r\n    return a0g_1[\"default\"](content, __spreadArray(__spreadArray(__spreadArray([], p1), p2), p3));\r\n}\r\nexports.v_smi = v_smi;\r\nvar arraySum = function (arr) { return arr.reduce(function (s, i) {\r\n    if (s === void 0) { s = 0; }\r\n    return s + i;\r\n}); };\r\nexports.arraySum = arraySum;\r\n\r\n/* \r\nfunction isEqual(actual, expected) {\r\n    // expect(actual[0]).be.deep.equal(expected[0]);\r\n    // Deep equal is too slow\r\n    chai_1.expect(exports.arraySum(Array.from(actual[0]))).be.equal(exports.arraySum(expected[0]));\r\n    chai_1.expect(actual[1]).be.equal(expected[1]);\r\n    chai_1.expect(actual[2]).be.deep.equal(expected[2]);\r\n    chai_1.expect(actual[3]).be.deep.equal(expected[3]);\r\n    chai_1.expect(actual[4]).be.deep.equal(expected[4]);\r\n}\r\nexports.isEqual = isEqual;\r\n */\r\n\r\nfunction createTA8jResult(input) {\r\n    return [\r\n        new Uint8Array(input[0]),\r\n        input[1],\r\n        input[2].slice(0, input[2].length),\r\n        input[3].slice(0, input[3].length),\r\n        input[4].slice(0, input[4].length),\r\n    ];\r\n}\r\nexports.createTA8jResult = createTA8jResult;\r\n\r\n/* \r\nfunction readJsonFile(filename) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var _a, _b;\r\n        return __generator(this, function (_c) {\r\n            switch (_c.label) {\r\n                case 0:\r\n                    _b = (_a = JSON).parse;\r\n                    return [4, fs_1.promises.readFile(filename, 'utf8')];\r\n                case 1: return [2, _b.apply(_a, [_c.sent()])];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.readJsonFile = readJsonFile;\r\n*/\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/index.js?");

/***/ }),

/***/ "./src/exported/processContentStep.js":
/*!********************************************!*\
  !*** ./src/exported/processContentStep.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.step = void 0;\r\nvar arraySwap_1 = __webpack_require__(/*! ../arraySwap */ \"./src/arraySwap.js\");\r\nexports[\"default\"] = (function (_a, key, i) {\r\n    var _b;\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    for (var v_7ki = 0, v_8ki = 0; i >= 0; i -= 2) {\r\n        _b = step(v_7ki, v_8ki, i, key, content), v_7ki = _b[0], v_8ki = _b[1];\r\n    }\r\n    return [content, contentLength, key1, key2, key3];\r\n});\r\nfunction step(v_7ki, v_8ki, i, key, content) {\r\n    v_7ki = (v_7ki + 1) % 256;\r\n    v_8ki = (v_8ki + key[v_7ki]) % 256;\r\n    arraySwap_1[\"default\"](key, v_7ki, v_8ki);\r\n    content[i] ^= key[(key[v_7ki] + key[v_8ki]) % 256];\r\n    return [v_7ki, v_8ki];\r\n}\r\nexports.step = step;\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/processContentStep.js?");

/***/ }),

/***/ "./src/exported/processFilename.js":
/*!*****************************************!*\
  !*** ./src/exported/processFilename.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports[\"default\"] = (function (filename) {\r\n    var result = [];\r\n    for (var index = 0; index < filename.length;) {\r\n        var v_rfi = filename.charCodeAt(index++);\r\n        v_rfi < 128\r\n            ? result.push(v_rfi)\r\n            : (v_rfi < 2048\r\n                ? result.push(192 | (v_rfi >> 6))\r\n                : (v_rfi < 55296 || v_rfi >= 57344 || index === filename.length\r\n                    ? result.push(224 | (v_rfi >> 12))\r\n                    : ((v_rfi = (v_rfi & 1023) << 10),\r\n                        (v_rfi |= filename.charCodeAt(index++) & 1023),\r\n                        (v_rfi += 65536),\r\n                        result.push(240 | (v_rfi >> 18)),\r\n                        result.push(128 | ((v_rfi >> 12) & 63))),\r\n                    result.push(128 | ((v_rfi >> 6) & 63))),\r\n                result.push(128 | (v_rfi & 63)));\r\n    }\r\n    return result;\r\n});\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/processFilename.js?");

/***/ }),

/***/ "./src/exported/tB0l.js":
/*!******************************!*\
  !*** ./src/exported/tB0l.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/exported/index.js\");\r\nvar processContentStep_1 = __webpack_require__(/*! ./processContentStep */ \"./src/exported/processContentStep.js\");\r\nfunction default_1(filenameKey, _a) {\r\n    var _b;\r\n    var content = _a[0], contentLength = _a[1], key1 = _a[2], key2 = _a[3], key3 = _a[4];\r\n    var key = index_1.v_qmi(key3, key2, filenameKey);\r\n    for (var i = 0, v_7ki = 0, v_8ki = 0; i < contentLength; i++) {\r\n        _b = processContentStep_1.step(v_7ki, v_8ki, i, key, content), v_7ki = _b[0], v_8ki = _b[1];\r\n    }\r\n    return [content, contentLength, key1, key2, key3];\r\n}\r\nexports[\"default\"] = default_1;\r\n\n\n//# sourceURL=webpack://ConfigDecoder/./src/exported/tB0l.js?");

/***/ })

/******/ });