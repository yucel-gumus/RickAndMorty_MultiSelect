import React from 'react';
import { PropsCharacter } from '../utils/Interface';
import { selectedContainerStyle, inputStyle, selectedCharactersName, buttonX } from '../styles/style';

const SelectedCharacters: React.FC<PropsCharacter> = ({ selectedCharacters, removeFromSelected, value, onChange, onKeyDown, inputRef }) => {
  return (
    <div style={selectedContainerStyle}>
      <>
        {selectedCharacters.map((character) => (
          <React.Fragment key={character.id}>
            <span
              style={selectedCharactersName}
            >
              <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                {character.name}
              </span>
              <button
                type="button"
                style={buttonX}
                onClick={() => removeFromSelected(character.id)}
              >
                ×
              </button>
            </span>
          </React.Fragment>

        ))}
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder='Lütfen Karakter Adı Giriniz'
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          style={inputStyle}
        />
      </>
    </div>
  );
};

export default SelectedCharacters;
