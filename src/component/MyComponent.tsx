import React, { useState, useEffect, KeyboardEvent, useRef } from 'react';
import SelectedCharacters from './SelectedCharacters';
import SearchResultList from './SearchResultList';
import { Character } from '../utils/Interface';
import highlightCharacterName from '../utils/highlightCharacterName';
import { ImageContainerStyle } from '../styles/style';
import fetchData from '../utils/fetchData';
import handleKeyDown from '../utils/keyboardsEvents'
import { RefObject } from 'react';
import showAlert from '../utils/alertService';


const MyComponent: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const popupRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (query.trim() !== '') {
            fetchData(query, setResults, setError, setLoading);
        } else {
            setResults([]);
        }
    }, [query]);

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => handleKeyDown(event, {
        highlightedIndex,
        results,
        setHighlightedIndex,
        toggleSelected,
        inputRef,
        popupRef: popupRef as RefObject<HTMLDivElement>
    });

    const toggleSelected = (character: Character) => {
        const isSelected = selectedCharacters.some((char) => char.id === character.id);
        if (isSelected) {
            removeFromSelected(character.id);
        } else {
            setSelectedCharacters([...selectedCharacters, character]);
        }
    };

    const removeFromSelected = (id: number) => {
        setSelectedCharacters(selectedCharacters.filter((char) => char.id !== id));
    };

     useEffect(() => {
        if (error) {
            showAlert(error);
            setError('');
        }
    }, [error]);

    return (
        <div style={{ position: 'relative' }}>
            <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/489102/rm-logo.png"
                style={ImageContainerStyle}
            />
            <SelectedCharacters
                selectedCharacters={selectedCharacters}
                removeFromSelected={removeFromSelected}
                value={query}
                onChange={setQuery}
                onKeyDown={onKeyDown}
                inputRef={inputRef} />
            {loading && (
                <div style={{ marginLeft: "450px" }}>
                    <span>Yükleniyor...</span>
                </div>
            )}
            {results && results.length > 0 && (
                <SearchResultList
                    results={results}
                    selectedCharacters={selectedCharacters}
                    toggleSelected={toggleSelected}
                    highlightCharacterName={highlightCharacterName}
                    query={query}
                    popupRef={popupRef}
                    highlightedIndex={highlightedIndex}
                />
            )}
        </div>
    );
};

export default MyComponent;
