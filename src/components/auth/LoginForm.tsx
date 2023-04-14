import React from 'react';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <label className={styles.emailLabel}>
        Email:
        <input
          className={styles.inputField}
          type="email"
          placeholder="email@domain.com"
        />
      </label>
      <label htmlFor="">
        Password:
        <input className={styles.inputField} type="password" />
      </label>
      <button className={styles.loginButton} type="submit">
        Log In
      </button>
    </form>
  );
}
