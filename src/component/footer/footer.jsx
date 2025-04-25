import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {new Date().getFullYear()} BodyForSoul. Все права защищены.</p>
    </footer>
  );
}
