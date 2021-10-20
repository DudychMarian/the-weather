import React from 'react';

import { Switch } from '../Switch/Switch';

import styles from './PageToggle.module.css';

export const PageToggle = ({ page, setPage }) => {
  React.useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(page));
  }, [page]);

  return (
    <div className={styles.pageToggle}>
      <span className={styles.toggleL}>1</span>
      <Switch id={'pages'} isOn={page} handleToggle={() => setPage(!page)} />
      <span className={styles.toggleR}>2</span>
    </div>
  );
};
