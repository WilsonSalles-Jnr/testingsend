import React from 'react';
import '../Styles/projetos.css'

class Project extends React.Component {
  render() { 
    return <main className="projectMain">
      <aside className="projectAside">
        <h2>Projetos:</h2>
        <hr />
        <ul>
          <li>Projeto 1</li>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
          <li>Projeto 4</li>
          <li>Projeto 5</li>
          <li>Projeto 6</li>
        </ul>
      </aside>
      <section className="projectSection">
        projeto rodando
      </section>
    </main>;
  }
}

export default Project;
