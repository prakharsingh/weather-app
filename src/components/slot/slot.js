import React from 'react';
import PropTypes from 'prop-types';
import styles from './slot.css';

const Slot = ({ title, slot, onSelection }) => {
  return (
    <div className={styles.slot} onClick={onSelection.bind(this, slot)}>
      {title}
    </div>
  );
};

Slot.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Slot;
