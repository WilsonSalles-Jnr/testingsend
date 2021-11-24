import React from 'react';

class UseApi extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      characters: []
    }
    this.chamaApi = this.chamaApi.bind(this);
  }

  componentDidMount() {
    this.chamaApi();
  }

  async chamaApi() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const result = await response.json();
    this.setState({ loaded: true, characters: result.results});
  }

  render() {
    const {loaded, characters} = this.state; 
    return (
      <main className="chamaApi">
      {characters.length > 0 && characters.map((cur) => (
        <section className="useApiCards">
          <img src={cur.image} alt={cur.name} />
          <article className="cardSpecification">
          <p>name: {cur.name}</p>
          <p>gender: {cur.gender}</p>
          <p>species: {cur.species}</p>
          <p>status: {cur.status}</p>
          </article>
        </section>
    ))}
    </main>
    );
  }
}
 
export default UseApi;
