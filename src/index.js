import React, { PropTypes } from 'react';

export default function ProgressCircle({ radius, value = 1, children } : { radius: number, value: number, children: any }) {
	const pct = (1 - value) * Math.PI * 100;
	return <div>
		<div className="circle-progress">
			<div style={styles.wrap}>
				<svg width={radius * 2} height={radius * 2} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<circle className="circle-progress__background" r="50" cx="50" cy="50" fill="transparent" />
					<circle className="circle-progress__bar" r="50" cx="50" cy="50" fill="transparent" strokeDasharray={Math.PI * 100} strokeDashoffset={pct} />
				</svg>
				{children}
			</div>
		</div>
	</div>;
}

ProgressCircle.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.number.isRequired,
	radius: PropTypes.number.isRequired,
};

const styles = {
	wrap: {
		display: 'inline-block',
		position: 'relative',
	},
};