import React from 'react';
import styles from './weather-item.css';

const baseUrl = 'https://openweathermap.org/img/w/';

const WeatherItem = ({ weather: { icon, description }, info: { temp, temp_max, temp_min }, wind: { speed } }) => (
  <div>
    <div className={styles.leftContent}>
      <img src={`${baseUrl}${icon}.png`} alt="weather-icon"/>
      <h3>{temp}&#176; C</h3>
      <h5>{description}</h5>
    </div>
    <div className={styles.rightContent}>
      <ul>
        <li><h5>Max Temperature: {temp_max}&#176; C</h5></li>
        <li><h5>Min Temperature: {temp_min}&#176; C</h5></li>
        <li><h5>Wind Speed: {speed} kmph</h5></li>
      </ul>
    </div>
  </div>
);

export default WeatherItem;

