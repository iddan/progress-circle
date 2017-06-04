'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PartialCircle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PartialCircle(_ref) {
  var radius = _ref.radius,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? 1 : _ref$value;

  var pct = (1 - value) * Math.PI * 100;
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('circle', { className: 'circle-progress__background', r: '50', cx: '50', cy: '50', fill: 'transparent' }),
    _react2.default.createElement('circle', { className: 'circle-progress__bar', r: '50', cx: '50', cy: '50', fill: 'transparent', strokeDasharray: Math.PI * 100, strokeDashoffset: pct })
  );
}

PartialCircle.propTypes = {
  value: _propTypes2.default.number.isRequired,
  radius: _propTypes2.default.number.isRequired
};