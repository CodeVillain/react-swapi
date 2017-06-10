import React from 'react';
import './styles.css';

import CharacterItem from '../CharacterItem';

class CharacterList extends React.Component {
  render() {
    const { characters, onCharacterSelect } = this.props;

    return (
      <div className='character-list'>
        {characters.map((character, index) => (
          <CharacterItem
            key={character.name}
            character={character}
            index={index}
            onCharacterSelect={onCharacterSelect}
          />
        ))}
      </div>
    );
  }
}

export default CharacterList;
