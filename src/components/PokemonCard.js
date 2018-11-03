import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle: true
  }
  
  handleCardClick = () => this.setState({ toggle: !this.state.toggle })

  render() {
    const { sprites, name, stats, weight } = this.props.pokemon
    return (
      <Card onClick={this.handleCardClick}>
        <div>
          <div className="image">
            {this.state.toggle 
            ? <img alt="" src={sprites.front} />
            : <img alt="" src={sprites.back} />}
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="header">lbs {weight}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => (stat.name === 'hp')).value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
