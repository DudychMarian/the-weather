import React from 'react';

import styles from './WeatherDetails.module.css';

export const WeatherDetails = ({ humidity, cloud, wind, feelslike }) => {
  return (
    <section className={styles.weather}>
      <h3>Weather Details</h3>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>Cloudy</p>
        <p>{cloud}%</p>
      </div>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>Humidity</p>
        <p>{humidity}% </p>
      </div>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>Wind</p>
        <p>{wind}km/h</p>
      </div>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>Feels like</p>
        <p>{feelslike}°</p>
      </div>
    </section>
  );
};
