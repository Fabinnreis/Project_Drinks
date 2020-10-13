import { Component } from "react";
import React from 'react';
import styles from './Footer.module.css';

export default class Footer extends Component{
render(){
    return <div className={styles.footer}>
        <p className={styles.footerP}>
        Resilia 2020 - Alguns direitos reservados
        </p>
        </div>
}

}