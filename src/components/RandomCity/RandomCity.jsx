import React from 'react';

import { generateRandomCity } from '../../utils/randomCity';
import { city } from '../../data/city';

import styles from './RandomCity.module.css';

export const RandomCity = ({ handleCityClick }) => {
  const [randomCity, setRandomCity] = React.useState([]);

  React.useEffect(() => {
    const res = generateRandomCity(city);
    setRandomCity(res);
  }, []);

  return (
    <ul className={styles.list}>
      <li onClick={() => handleCityClick(randomCity[0])}>{randomCity[0]}</li>
      <li onClick={() => handleCityClick(randomCity[1])}>{randomCity[1]}</li>
      <li onClick={() => handleCityClick(randomCity[2])}>{randomCity[2]}</li>
      <li onClick={() => handleCityClick(randomCity[3])}>{randomCity[3]}</li>
      <li onClick={() => handleCityClick(randomCity[4])}>{randomCity[4]}</li>
      <li onClick={() => handleCityClick(randomCity[5])}>{randomCity[5]}</li>
      <li onClick={() => handleCityClick(randomCity[6])}>{randomCity[6]}</li>
      {/* <li onClick={() => handleCityClick(randomCity[7])}>{randomCity[7]}</li> */}
    </ul>
  );
};
