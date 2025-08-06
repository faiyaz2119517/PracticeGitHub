import React, { useState } from 'react';

interface KeyboardInputProps {
  displayedLetter: string;
  onCorrectInput: () => void;
  onIncorrectInput: () => void;
}

const KeyboardInput: React.FC<KeyboardInputProps> = ({ displayedLetter, onCorrectInput, onIncorrectInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (inputValue.toLowerCase() === displayedLetter.toLowerCase()) {
        onCorrectInput();
        setInputValue('');
      } else {
        onIncorrectInput();
        setInputValue('');
      }
    }
  };

  return (
    <div className="keyboard-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type the letter and press Enter"
      />
    </div>
  );
};

export default KeyboardInput;