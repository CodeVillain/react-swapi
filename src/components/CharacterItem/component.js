import React from 'react';

class CharacterItem extends React.Component {

  render() {
    const { character, onCharacterSelect, index } = this.props;

    return (
      <div
        onClick={() => onCharacterSelect(index)}
        className='character-name'
      >
        {character.name}
      </div>
    );
  }
}

export default CharacterItem;
