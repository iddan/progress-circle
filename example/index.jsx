import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProgressCircle from '..';

class Demo extends Component {

	state = {
		value: 100,
	};

	handleChange = (e) => {
		let value = parseFloat(e.target.value);
		if (value > 100) {
			value = 100;
		} else if (isNaN(value) || value < 0) {
			value = 0;
		}
		this.setState({ value });
	};

	render = () => {
		const { state: { value }} = this;
		return (<div>
			<ProgressCircle radius={150} value={value / 100}>
				<div className="circle-progress__text">{value}%</div>
			</ProgressCircle>
			<div className="percentage-input">
				<label htmlFor="percent">Percent:</label>
				<input type="number" id="percent" name="percent" onChange={this.handleChange} min="0" max="100" value={value} />
			</div>
		</div>);
	};
}

ReactDOM.render(<Demo />, document.querySelector('#circle-progress'));