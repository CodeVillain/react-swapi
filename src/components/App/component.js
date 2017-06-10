import React, { Component } from 'react';
import './styles.css';

import CharacterList from '../CharacterList';
import SelectedCharacter from '../SelectedCharacter';

class App extends Component {
  state = {
    characters: [],
    index: 0
  };

  componentDidMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then(res => res.json())
      .then(data => this.setState({ characters: data.results }));
  }

  onCharacterSelect = (index) => {
    this.setState({ index });
  };

  render() {
    const { characters, index } = this.state;
    const character = characters.length > 0 ? characters[index] : null;

    return (
      <div className="app">
        <CharacterList characters={characters} onCharacterSelect={this.onCharacterSelect} />
        {character && <SelectedCharacter character={character} />}
        <div className="clear" />
      </div>
    );
  }
}

export default App;
