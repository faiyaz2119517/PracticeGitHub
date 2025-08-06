import React, { useState, useEffect } from 'react';

interface LetterDisplayProps {
    letter: string;
    size: number;
}

const LetterDisplay: React.FC<LetterDisplayProps> = ({ letter, size }) => {
    const [currentSize, setCurrentSize] = useState(size);

    useEffect(() => {
        setCurrentSize(size);
    }, [size]);

    return (
        <div style={{ fontSize: `${currentSize}px`, transition: 'font-size 0.2s ease' }}>
            {letter}
        </div>
    );
};

export default LetterDisplay;