import React from 'react';
import Link from 'next/link';
import { SophonLogo } from '../Icons/SophonLogo';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div>
          <SophonLogo />
        </div>
        <ul className={classes.ul}>
          <li>
            <Link href="/" className={classes.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className={classes.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/" className={classes.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
