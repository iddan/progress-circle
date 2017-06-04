import React from 'react';
import PropTypes from 'prop-types';

export default function PartialCircle({radius, value = 1}) {
  const pct = (1 - value) * Math.PI * 100;
  return (
    <g>
      <circle className="circle-progress__background" r="50" cx="50" cy="50" fill="transparent" />
      <circle className="circle-progress__bar" r="50" cx="50" cy="50" fill="transparent" strokeDasharray={Math.PI * 100} strokeDashoffset={pct} />
    </g>
  );
}

PartialCircle.propTypes = {
  value: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
};
