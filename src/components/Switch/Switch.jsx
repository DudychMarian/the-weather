import React from 'react';

import styles from './Switch.module.css';

export const Switch = ({ isOn, handleToggle, id }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.reactSwitchCheckbox}
        id={`${id}`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && 'rgb(129, 160, 154)' }}
        className={styles.reactSwitchLabel}
        htmlFor={`${id}`}>
        <span className={styles.reactSwitchButton} />
      </label>
    </>
  );
};
