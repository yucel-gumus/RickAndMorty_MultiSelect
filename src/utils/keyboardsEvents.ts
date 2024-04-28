import { RefObject,KeyboardEvent } from 'react';
import { Character } from './Interface';

const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    {
      highlightedIndex,
      results,
      setHighlightedIndex,
      toggleSelected,
      inputRef,
      popupRef
    }: {
      highlightedIndex: number;
      results: Character[];
      setHighlightedIndex: React.Dispatch<number>;
      toggleSelected: (character: Character) => void;
      inputRef: RefObject<HTMLInputElement>;
      popupRef: RefObject<HTMLDivElement>;
    }
  ) => {
    const scrollIntoView = () => {
      if (popupRef.current && popupRef.current.children[highlightedIndex]) {
        (popupRef.current.children[highlightedIndex] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    };
  
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (highlightedIndex < results.length - 1) {
          setHighlightedIndex(highlightedIndex + 1);
          scrollIntoView();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (highlightedIndex > 0) {
          setHighlightedIndex(highlightedIndex - 1);
          scrollIntoView();
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (highlightedIndex !== -1) {
          const selectedCharacter = results[highlightedIndex];
          toggleSelected(selectedCharacter);
        }
        break;
      case 'Tab':
        if (highlightedIndex === results.length - 1) {
          event.preventDefault();
          setHighlightedIndex(-1);
          inputRef.current?.focus();
        }
        break;
      default:
        break;
    }
  };
  
  export default handleKeyDown;