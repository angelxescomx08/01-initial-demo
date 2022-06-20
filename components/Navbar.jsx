import React from 'react';
import { ActiveLink } from './ActiveLink';

import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
        <ActiveLink texto='Home' href='/' />
        <ActiveLink texto='About' href='/about' />
        <ActiveLink texto='Contact' href='/contact' />
    </nav>
  )
}
