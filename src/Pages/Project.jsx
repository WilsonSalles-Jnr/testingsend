import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import UseApi from '../Projetos/ProjetoApi/UseApi';
import '../Styles/projetos.css'

class Project extends React.Component {
  render() { 
    return <main className="projectMain">
      <aside className="projectAside">
        <h2>Projetos:</h2>
        <hr />
        <ul>
          <Link to="/projetos/useapi">Usando api e filtrando resultados</Link>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
          <li>Projeto 4</li>
          <li>Projeto 5</li>
          <li>Projeto 6</li>
        </ul>
      </aside>
      <section className="projectSection">
        <Switch>
          <Route exact path="/projetos/">Selecione um projeto</Route>
          <Route path="/projetos/useapi" component={UseApi} />
        </Switch>
      </section>
    </main>;
  }
}

export default Project;
