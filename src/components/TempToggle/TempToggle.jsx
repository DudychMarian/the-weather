import React from 'react';

import { Switch } from '../Switch/Switch';

import styles from './TempToggle.module.css';

export const TempToggle = ({ toggle, setToggle }) => {
  React.useEffect(() => {
    localStorage.setItem('toggle', JSON.stringify(toggle));
  }, [toggle]);

  return (
    <div className={styles.toggleTemp}>
      <span className={styles.tempC}>C°</span>
      <Switch id={'toggle'} isOn={toggle} handleToggle={() => setToggle(!toggle)} />
      <span className={styles.tempF}>F°</span>
    </div>
  );
};
