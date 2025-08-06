import React from 'react';
import './Effects.css';

interface EffectsProps {
    isError: boolean;
}

const Effects: React.FC<EffectsProps> = ({ isError }) => {
    return (
        <div className={`effects-container ${isError ? 'shake' : ''}`}>
            {isError && <div className="error-message">Try Again</div>}
        </div>
    );
};

export default Effects;