import { Component } from "react";
import React from 'react';
import './main.css';

export default class Main extends Component{
render(){
    return (
    <section className="flexboxSpaceAround main">
    <div>
      <img src='#'></img>
    </div>
    <div>
      <form>
        <div><input type="text" placeholder="Insira seu nome"></input></div>
        <div><input type="text" placeholder="Insira seu Email"></input></div>
        <div><textarea placeholder="Insira sua mensagem!"></textarea></div>
        
        <button>Enviar</button>
      </form>

    </div>
  </section>
  )
}

}
