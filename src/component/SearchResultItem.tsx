import React from 'react';
import { PropsSearch } from '../utils/Interface';
import { imageStyle } from '../styles/style';

const SearchResultItem: React.FC<PropsSearch> = ({ character, isSelected, toggleSelected, highlightCharacterName, isHighlighted }) => {
  const rowClassName = [
    'rm-result-item',
    isHighlighted ? 'is-highlighted' : '',
    isSelected ? 'is-selected' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div
        className={rowClassName}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleSelected(character)}
          style={{ marginRight: '10px', accentColor: '#EC7D55' }}
        />
        <img src={character.image} alt={character.name} style={imageStyle} />
        <div>
          <p style={{ margin: '0', color: '#253341' }}>
            <strong>{highlightCharacterName(character.name)}</strong>
          </p>
          <p style={{ margin: '0', color: '#3E5164', fontSize: '0.9rem' }}>
            {character.episode.length} Episodes
          </p>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #BCC7D2', margin: 0 }} />
    </>
  );
};

export default SearchResultItem;
