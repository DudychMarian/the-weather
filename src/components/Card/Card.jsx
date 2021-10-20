import React from 'react';
import AnimatedNumber from 'animated-number-react';

import { timeConverter } from '../../utils/timeConverter';

import styles from './Card.module.css';

export const Card = ({ name, temp, condition, icon, time }) => {
  const formatValue = (value) => value.toFixed(0);

  return (
    <div className={styles.card}>
      <div className={styles.temp}>
        <AnimatedNumber value={temp} formatValue={formatValue} />
        <span>°</span>
      </div>
      <div className={styles.weatherInfo}>
        <h1>{name}</h1>
        <p className={styles.small}>{timeConverter(time)}</p>
      </div>
      <div className={styles.weatherInfo}>
        <img src={icon} alt="weather" className={styles.img}></img>
        <p className={styles.small}>{condition}</p>
      </div>
    </div>
  );
};
