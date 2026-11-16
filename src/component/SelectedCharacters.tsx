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
              <span style={{ marginLeft: "4px", fontSize: "18px", color: "#253341" }}>
                {character.name}
              </span>
              <button
                type="button"
                className="rm-chip-remove"
                aria-label={`Kaldır: ${character.name}`}
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
          className="rm-input"
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
