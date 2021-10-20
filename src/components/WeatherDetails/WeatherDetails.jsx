import React from 'react';

import AnimatedNumber from 'animated-number-react';

import styles from './WeatherDetails.module.css';

export const WeatherDetails = ({
  page,
  humidity,
  cloud,
  wind,
  feelslike,
  gust,
  uv,
  precip,
  pressure,
}) => {
  const formatValue = (value) => value.toFixed(0);

  return (
    <section className={styles.weather}>
      <h3>Weather Details</h3>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>{page ? 'Precip' : 'Cloudy'}</p>
        <div className={styles.weatherInfo}>
          <AnimatedNumber value={page ? precip : cloud} formatValue={formatValue} />
          <span>{page ? 'mm' : '%'}</span>
        </div>
      </div>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>{page ? 'UV' : 'Humidity'}</p>
        <div className={styles.weatherInfo}>
          <AnimatedNumber value={page ? uv : humidity} formatValue={formatValue} />
          <span>{page ? '' : '%'}</span>
        </div>
      </div>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>{page ? 'Gust' : 'Wind'}</p>
        <div className={styles.weatherInfo}>
          <AnimatedNumber value={page ? gust : wind} formatValue={formatValue} />
          <span>km/h</span>
        </div>
      </div>
      <div className={styles.weatherDetail}>
        <p className={styles.gray}>{page ? 'Pressure' : 'Feels like'}</p>
        <div className={styles.weatherInfo}>
          <AnimatedNumber value={page ? pressure : feelslike} formatValue={formatValue} />
          <span>{page ? 'mb' : '°'}</span>
        </div>
      </div>
    </section>
  );
};
