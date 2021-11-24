import React from 'react';
import '../Styles/skills.css'

class Skills extends React.Component {
  render() { 
    return <main className="skillMain">
    <h1>Skills</h1>
      <hr />
    <section className="skillSection">
      <article className="skill">
        <h2>Fundamentais</h2>
        <ul>
          <li>Git</li>
          <li>Github</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
        </ul>
      </article>
      <hr />
      <article className="skill">
        <h2>Front-end</h2>
        <ul>
          <li>ReactJS</li>
          <li>React Router Dom</li>
          <li>React Testing Library (RTL)</li>
          <li>Redux</li>
          <li>ContextAPI</li>
        </ul>
      </article>
    </section>
    </main>;
  }
}
 
export default Skills;