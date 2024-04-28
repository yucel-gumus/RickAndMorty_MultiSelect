import React from 'react';
import SearchResultItem from './SearchResultItem';
import { PropsResult } from '../utils/Interface';
import { popupStyle } from '../styles/style';
const SearchResultList: React.FC<PropsResult> = ({ results, selectedCharacters, toggleSelected, query, popupRef, highlightedIndex, highlightCharacterName }) => {
  return (
    <div style={popupStyle} ref={popupRef}>
      {results.map((result, index) => (
        <SearchResultItem
          key={result.id}
          character={result}
          isSelected={selectedCharacters.some((char) => char.id === result.id)}
          toggleSelected={toggleSelected}
          highlightCharacterName={(name: string) => highlightCharacterName(name, query)}
          isHighlighted={index === highlightedIndex}
          query={query}
        />
      ))}
    </div>
  );
};

export default SearchResultList;
