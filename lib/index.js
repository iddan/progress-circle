'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartialCircle = undefined;

var _PartialCircle = require('./PartialCircle');

Object.defineProperty(exports, 'PartialCircle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PartialCircle).default;
  }
});
exports.default = ProgressCircle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PartialCircle2 = _interopRequireDefault(_PartialCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProgressCircle(_ref) {
  var radius = _ref.radius,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? 1 : _ref$value,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'circle-progress' },
      _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement(
          'svg',
          { width: radius * 2, height: radius * 2, viewBox: '0 0 100 100', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement(_PartialCircle2.default, { radius: radius, value: value })
        ),
        children
      )
    )
  );
}

ProgressCircle.propTypes = {
  children: _propTypes2.default.node.isRequired,
  value: _propTypes2.default.number.isRequired,
  radius: _propTypes2.default.number.isRequired
};

var styles = {
  wrap: {
    display: 'inline-block',
    position: 'relative'
  }
};