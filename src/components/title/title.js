import React from 'react';
import styles from './title.css';

const dateOptions = {
  year: 'numeric', month: 'short', day: 'numeric', weekday: 'short',
  hour: 'numeric', minute: 'numeric',
  hour12: false,
};

const Title = ({ city, date }) => (
  <div className={styles.title}>
    <h3>{city && `${city.name}, ${city.country}`}</h3>
    <h5>{new Date(date * 1000).toLocaleString('en-us', dateOptions)}</h5>
  </div>
);

export default Title;
