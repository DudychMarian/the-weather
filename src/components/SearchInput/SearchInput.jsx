import React from 'react';
import { Hint } from 'react-autocomplete-hint';

import { city } from '../../data/city';

import styles from './SearchInput.module.css';

export const SearchInput = ({ inputChange, handleInputChange, placeholder, handleClick }) => {
  const [hintData, setHintData] = React.useState([]);

  React.useEffect(() => {
    setHintData(city);
  }, []);

  return (
    <div className={styles.searchDetails}>
      <label>
        <Hint options={hintData} allowTabFill>
          <input
            value={inputChange}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={styles.searchInput}
          />
        </Hint>
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
  );
};
