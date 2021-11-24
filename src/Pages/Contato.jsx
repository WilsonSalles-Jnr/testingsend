import React from 'react';
import '../Styles/Contato.css';

class Contato extends React.Component {
  render() { 
    return <main className="mainContato">
      <h1>Contato:</h1>
      <em>Fico feliz por ver meu portifólio até aqui, deixo aqui meus contatos para que possamos conversar :D</em>
      <h2>Github:</h2>
      <a href="https://github.com/WilsonSalles-Jnr">WilsonSalles-Jnr</a>
      <h2>Linkedin:</h2>
      <a href="https://www.linkedin.com/in/wilson-salles-junior/" target="_blank">Wilson Salles Junior</a>
      <h2>Whatsapp:</h2>
      <a href="tel: +5514991491072">+55 (14) 99149-1072</a>
      <h2>Cidade:</h2>
      <a href="https://www.google.com/maps/place/Bauru,+SP/@-22.2878573,-49.0905487,12z/data=!3m1!4b1!4m5!3m4!1s0x94bf689c0ddaa221:0x251c368f6fa134a0!8m2!3d-22.3155297!4d-49.0708221?hl=pt-BR" target="_blank">Bauru/SP</a>
    </main>;
  }
}
 
export default Contato;
