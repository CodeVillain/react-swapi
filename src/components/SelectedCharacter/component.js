import React from 'react';
import './styles.css';

class SelectedCharacter extends React.Component {
  render() {
    const { character } = this.props;

    return (
      <div className='selected-character'>
        {character.name} {character.birth_year} {character.gender}
      </div>
    );
  }
}

export default SelectedCharacter;
