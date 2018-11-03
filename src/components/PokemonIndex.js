import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    value: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemon => this.setState({ pokemon }))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ value })
  }

  addNewPokemon = (poke) => {
    this.setState({ pokemon: [...this.state.pokemon, poke] })
  }

  sortPokemon = () => {
    const pokemon = this.state.pokemon.sort(function(a, b) {
      return b.weight - a.weight;
    });
    this.setState({ pokemon })
  }

  render() {
    const filterPoke = this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.value.toLowerCase()))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={filterPoke} sortPokemon={this.sortPokemon} />
        <br />
        <PokemonForm  addPoke={this.addNewPokemon} />
      </div>
    )
  }
}

export default PokemonPage
