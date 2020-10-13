import { Component } from "react";
import React from 'react';
import styles from './Main.module.css';
import Input from '../input/Input'

export default class Main extends Component{
render(){
    return (
    <section className="flexboxSpaceAround main">
    <div className={styles.homeCover} />
    <div>
      <form>
        <Input id="Teste" place="Insira seu nome" label="Nome: " />
        <Input id="Teste" place="Insira seu Email" label="Email: " />
                
        <button>Enviar</button>
      </form>

    </div>
  </section>
  )
}

}
