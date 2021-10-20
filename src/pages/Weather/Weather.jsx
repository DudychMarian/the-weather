import React from 'react';
import axios from 'axios';
import { BabelLoading } from 'react-loadingg';

import { Card } from '../../components/Card/Card';
import { WeatherDetails } from '../../components/WeatherDetails/WeatherDetails';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { messageError } from '../../utils/Message/clientMessages';
import { RandomCity } from '../../components/RandomCity/RandomCity';
import { PageToggle } from '../../components/PageToggle/PageToggle';
import { TempToggle } from '../../components/TempToggle/TempToggle';

import styles from './Weather.module.css';

export const Weather = () => {
  const [currentCity, setCurrentCity] = React.useState('london');
  const [inputChange, setInputChange] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('Another location');
  const [toggle, setToggle] = React.useState(() => {
    const saved = localStorage.getItem('toggle');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  const [page, setPage] = React.useState(() => {
    const pageRes = localStorage.getItem('pages');
    const initialValue = JSON.parse(pageRes);
    return initialValue || false;
  });
  const [ip, setIP] = React.useState('');
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

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        getData();
        const dataResponse = await axios.get(
          `https://ipinfo.io/${ip}?token=${process.env.REACT_APP_IP_INFO_TOKEN}`,
        );
        setCurrentCity(dataResponse.data.city);
      } catch (error) {
        messageError('Wrong location');
      }
    }
    fetchData();
  }, [ip]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const dataResponse = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_TOKEN}&q=${currentCity}`,
        );
        setData(dataResponse.data);
        setPlaceholder('Another location');
        setLoading(false);
      } catch (error) {
        setPlaceholder('Wrong location');
        messageError('Wrong location');
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

  console.log(page);

  return (
    <div className={styles.container}>
      <div>
        {loading ? (
          <BabelLoading />
        ) : (
          <div className={styles.card}>
            <Card
              name={data.location.name}
              temp={toggle ? data.current.temp_f : data.current.temp_c}
              feel={data.current.feelslike_c}
              condition={data.current.condition.text}
              icon={data.current.condition.icon}
              time={data.location.localtime}
            />
          </div>
        )}
      </div>
      <div className={styles.detail}>
        <SearchInput
          inputChange={inputChange}
          handleInputChange={handleInputChange}
          placeholder={placeholder}
          handleClick={handleClick}
        />
        <div className={styles.moreCity}>
          <RandomCity handleCityClick={handleCityClick} />
        </div>
        {loading ? null : (
          <div>
            <WeatherDetails
              humidity={data.current.humidity}
              cloud={data.current.cloud}
              wind={data.current.wind_kph}
              feelslike={toggle ? data.current.feelslike_f : data.current.feelslike_c}
              pressure={data.current.pressure_mb}
              precip={data.current.precip_mm}
              uv={data.current.uv}
              gust={data.current.gust_kph}
              page={page}
            />
          </div>
        )}
        <div className={styles.toggle}>
          <PageToggle page={page} setPage={setPage} />
          <TempToggle toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </div>
  );
};
