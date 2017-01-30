/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressCircle;


function ProgressCircle(_ref) {
	var radius = _ref.radius,
	    _ref$value = _ref.value,
	    value = _ref$value === undefined ? 1 : _ref$value,
	    children = _ref.children;

	var pct = (1 - value) * Math.PI * 100;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		null,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: "circle-progress" },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ style: styles.wrap },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"svg",
					{ width: radius * 2, height: radius * 2, viewBox: "0 0 100 100", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { className: "circle-progress__background", r: "50", cx: "50", cy: "50", fill: "transparent" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { className: "circle-progress__bar", r: "50", cx: "50", cy: "50", fill: "transparent", strokeDasharray: Math.PI * 100, strokeDashoffset: pct })
				),
				children
			)
		)
	);
}

ProgressCircle.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired,
	value: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired,
	radius: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired
};

var styles = {
	wrap: {
		display: 'inline-block',
		position: 'relative'
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Demo = function (_Component) {
	_inherits(Demo, _Component);

	function Demo() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Demo);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: 100
		}, _this.handleChange = function (e) {
			var value = parseFloat(e.target.value);
			if (value > 100) {
				value = 100;
			} else if (isNaN(value) || value < 0) {
				value = 0;
			}
			_this.setState({ value: value });
		}, _this.render = function () {
			var _this2 = _this,
			    value = _this2.state.value;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2____["a" /* default */],
					{ radius: 150, value: value / 100 },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'circle-progress__text' },
						value,
						'%'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'percentage-input' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						{ htmlFor: 'percent' },
						'Percent:'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', id: 'percent', name: 'percent', onChange: _this.handleChange, min: '0', max: '100', value: value })
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Demo, null), document.querySelector('#circle-progress'));

/***/ })
/******/ ]);