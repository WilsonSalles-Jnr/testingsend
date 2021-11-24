import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css'

class Header extends React.Component {
  render() { 
    return (
      <header>
        <h1>Wilson Salles Junior</h1>
        <nav>
          <ul>
           
            <Link to="/">Inicio</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
          </ul>
        </nav>
      </header>
    );
  }
}
 
export default Header;