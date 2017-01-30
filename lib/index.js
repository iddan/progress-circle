import React, { PropTypes } from 'react';

export default function ProgressCircle(_ref) {
	var radius = _ref.radius,
	    _ref$value = _ref.value,
	    value = _ref$value === undefined ? 1 : _ref$value,
	    children = _ref.children;

	var pct = (1 - value) * Math.PI * 100;
	return React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			{ className: "circle-progress" },
			React.createElement(
				"div",
				{ style: styles.wrap },
				React.createElement(
					"svg",
					{ width: radius * 2, height: radius * 2, viewBox: "0 0 100 100", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
					React.createElement("circle", { className: "circle-progress__background", r: "50", cx: "50", cy: "50", fill: "transparent" }),
					React.createElement("circle", { className: "circle-progress__bar", r: "50", cx: "50", cy: "50", fill: "transparent", strokeDasharray: Math.PI * 100, strokeDashoffset: pct })
				),
				children
			)
		)
	);
}

ProgressCircle.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.number.isRequired,
	radius: PropTypes.number.isRequired
};

var styles = {
	wrap: {
		display: 'inline-block',
		position: 'relative'
	}
};