import { Component } from "react";
import React from 'react';
import styles from './Header.module.css';

export default class Header extends Component{
render(){
    return (
      <nav className={styles.myNav}>
        <a className={styles.menuItem} href="/drinks/pop">
          Drinks
        </a>
        <a className={styles.menuItem} href="/sobre">
          Sobre Nós
        </a>
        <a className={styles.logo} href="/">
          Bons Drinks
        </a>
        <a className={styles.menuItem} href="/time">
          Nosso Time
        </a>
        <a className={styles.menuItem} href="/contato">
          Contato
        </a>
      </nav>
    );
}

}

 