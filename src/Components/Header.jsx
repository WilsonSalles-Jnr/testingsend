import React from 'react';
import '../Styles/header.css'

class Header extends React.Component {
  render() { 
    return (
      <header>
        <h1>Wilson Salles Junior</h1>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Skills</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    );
  }
}
 
export default Header;