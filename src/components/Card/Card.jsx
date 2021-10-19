import React from 'react';

import styles from './Card.module.css';

export const Card = ({ name, temp, feel, condition, icon, time }) => {
  return (
    <div className={styles.card}>
      <b className={styles.temp}>{temp}°</b>
      <div className={styles.weatherInfo}>
        <h1>{name}</h1>
        <p className={styles.small}>{time}</p>
      </div>
      {/* <p>Feels like: {feel} °C</p> */}
      <div className={styles.weatherInfo}>
        <img src={icon} alt="weather"></img>
        <p className={styles.small}>{condition}</p>
      </div>
    </div>
  );
};
