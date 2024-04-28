export interface Character {
  id: number;
  name: string;
  image: string;
  episode: string[];
}

export interface CharacterListItemProps {
  character: Character;
  selected: boolean;
  toggleSelected: (character: Character) => void;
  highlightCharacterName: (name: string) => JSX.Element;
}

export interface Props {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface PropsResult {
  results: Character[];
  selectedCharacters: Character[];
  toggleSelected: (character: Character) => void;
  highlightCharacterName: (name: string, query: string) => JSX.Element;
  query: string; 
  popupRef: React.RefObject<HTMLDivElement>;
  highlightedIndex: number;
}

export interface PropsItem extends PropsResult {
  highlightCharacterName: (name: string, query?: string) => JSX.Element;
}

export interface PropsSearch {
  key: number;
  character: Character;
  isSelected: boolean;
  toggleSelected: (character: Character) => void;
  highlightCharacterName: (name: string) => JSX.Element;
  isHighlighted: boolean;
  query: string;
}



export interface PropsCharacter {
  selectedCharacters: Character[];
  removeFromSelected: (id: number) => void;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}
