import React from 'react';
import PropTypes from 'prop-types';
import PartialCircle from './PartialCircle';
export {default as PartialCircle} from './PartialCircle';

export default function ProgressCircle({radius, value = 1, children}) {
  return (
    <div>
      <div className="circle-progress">
        <div style={styles.wrap}>
          <svg width={radius * 2} height={radius * 2} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <PartialCircle radius={radius} value={value} />
          </svg>
          {children}
        </div>
      </div>
    </div>
  );
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
