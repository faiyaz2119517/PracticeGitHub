import React, { useState } from 'react';
import LetterDisplay from './components/LetterDisplay';
import FingerImage from './components/FingerImage';
import KeyboardInput from './components/KeyboardInput';
import Effects from './components/Effects';
import './styles/App.css';

const App = () => {
    const [letter, setLetter] = useState('A');
    const [size, setSize] = useState(50);
    const [error, setError] = useState(false);
    const [fingerIndex, setFingerIndex] = useState(0);
    const fingers = ['index-finger', 'middle-finger', 'ring-finger', 'pinky-finger'];

    const handleCorrectInput = () => {
        setSize(size + 10);
        // Logic to change the letter can be added here
    };

    const handleIncorrectInput = () => {
        setError(true);
        setTimeout(() => setError(false), 1000); // Reset error after 1 second
    };

    return (
        <div className={`app ${error ? 'shake' : ''}`}>
            <FingerImage finger={fingers[fingerIndex]} />
            <LetterDisplay letter={letter} size={size} />
            <KeyboardInput 
                letter={letter} 
                onCorrectInput={handleCorrectInput} 
                onIncorrectInput={handleIncorrectInput} 
            />
            <Effects error={error} />
        </div>
    );
};

export default App;