import React from 'react';
import PropTypes from 'prop-types';
import styles from './day.css';

const Day = ({ onSelection, day }) => {
  return (
    <button className={styles.day} onClick={onSelection.bind(this, day)}>{day.name}</button>
  );
};

Day.propTypes = {
  onSelection: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired,
};

export default Day;
