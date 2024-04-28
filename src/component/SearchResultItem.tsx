import React from 'react';
import { PropsSearch } from '../utils/Interface'
import { imageStyle } from '../styles/style';

const SearchResultItem: React.FC<PropsSearch> = ({ character, isSelected, toggleSelected, highlightCharacterName, isHighlighted }) => {
  return (
    <>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
          backgroundColor: isHighlighted ? 'lightblue' : 'transparent',
        }}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleSelected(character)}
          style={{ marginRight: '10px' }}
        />
        <img src={character.image} alt={character.name} style={imageStyle} />
        <div>
          <p style={{ margin: '0' }}>
            <strong>{highlightCharacterName(character.name)}</strong>
          </p>
          <p style={{ margin: '0' }}>{character.episode.length} Episodes</p>
        </div>
      </div>
      <hr></hr>
    </>

  );
};

export default SearchResultItem;
