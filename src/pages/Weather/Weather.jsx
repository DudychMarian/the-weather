import React from 'react';
import axios from 'axios';

import { Card } from '../../components/Card/Card';
import { WeatherDetails } from '../../components/WeatherDetails/WeatherDetails';

import { city } from '../../data/city';

import styles from './Weather.module.css';

export const Weather = () => {
  const [currentCity, setCurrentCity] = React.useState('London');
  const [inputChange, setInputChange] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('Another location');
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function handleInputChange(e) {
    setInputChange(e.target.value);
  }

  function handleClick() {
    setCurrentCity(inputChange);
    setInputChange('');
  }

  function handleCityClick(city) {
    setCurrentCity(city);
    setInputChange('');
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const dataResponse = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=c2776f71cae84aa1811224001211610&q=${currentCity}`,
        );

        setData(dataResponse.data);
        setPlaceholder('Another location');
        setLoading(false);
      } catch (error) {
        setPlaceholder('Wrong location');
      }
    }
    fetchData();
  }, [currentCity]);

  React.useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        setCurrentCity(inputChange);
        setInputChange('');
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [inputChange]);

  return (
    <div className={styles.container}>
      <div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div className={styles.card}>
            <Card
              name={data.location.name}
              temp={data.current.temp_c}
              feel={data.current.feelslike_c}
              condition={data.current.condition.text}
              icon={data.current.condition.icon}
              time={data.location.localtime}
            />
          </div>
        )}
      </div>
      <div className={styles.detail}>
        <div className={styles.searchDetails}>
          <label>
            <input
              value={inputChange}
              onChange={handleInputChange}
              placeholder={placeholder}
              className={styles.searchInput}
            />
          </label>
          <button onClick={handleClick} className={styles.searchButton} type="submit">
            <svg
              width="30"
              height="30"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17L11 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.moreCity}>
          <ul className={styles.list}>
            <li onClick={() => handleCityClick(city[0])}>Birmingham</li>
            <li onClick={() => handleCityClick(city[1])}>Manchester</li>
            <li onClick={() => handleCityClick(city[2])}>New York</li>
            <li onClick={() => handleCityClick(city[3])}>California</li>
          </ul>
        </div>
        {loading ? null : (
          <div>
            <WeatherDetails
              humidity={data.current.humidity}
              cloud={data.current.cloud}
              wind={data.current.wind_kph}
              feelslike={data.current.feelslike_c}
            />
          </div>
        )}
      </div>
    </div>
  );
};
