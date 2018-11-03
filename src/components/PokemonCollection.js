import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.sortPokemon}><i className="user plus icon" />Sort by weight</button>
      <h1>Pokemon Collection</h1> 
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(pokemon => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        })}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
