import React from 'react';

class UseApi extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      characters: [],
      nome: '',
      genero: '',
      specie: '',
      status: '',
    }
    this.chamaApi = this.chamaApi.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.filtroNome = this.filtroNome.bind(this);
  }

  componentDidMount() {
    this.chamaApi();
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value })
    this.filtroNome();
  }

  filtroNome() {
    const { characters, nome, genero, specie, status } = this.state;
    const filtroNome = characters.filter((cur) => cur.name.toLowerCase().includes(nome.toLowerCase()))
    const filtroGenero = filtroNome.filter((cur) => cur.gender.includes(genero));
    const filtroSpecie = filtroGenero.filter((cur) => cur.species.toLowerCase().includes(specie.toLowerCase()));
    const filtroStatus = filtroSpecie.filter((cur) => cur.status.toLowerCase().includes(status.toLowerCase()))
    return filtroStatus
  }

  async chamaApi() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const result = await response.json();
    this.setState({ loaded: true, characters: result.results});
  }

  render() {
    const {loaded, characters} = this.state; 
    return (
      <>
      <label htmlFor="nome">
        Nome:
      <input type="text" id="nome" onChange={this.handleChange} />
      </label>
      <label htmlFor="genero">
        Genero:
        <select id="genero" onChange={this.handleChange} >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>
      <label htmlFor="status">
        Status:
        <select id="status" onChange={this.handleChange} >
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>
      <label htmlFor="specie">
        Species:
        <select id="specie" onChange={this.handleChange} >
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </label>
      <label>Resultado: {this.filtroNome().length}</label>
      <main className="chamaApi">
      {loaded && this.filtroNome().map((cur) => (
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
    </>
    );
  }
}
 
export default UseApi;
