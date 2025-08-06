import React from 'react';

interface FingerImageProps {
    fingerType: 'index' | 'middle' | 'ring' | 'pinky';
}

const FingerImage: React.FC<FingerImageProps> = ({ fingerType }) => {
    const getFingerImage = () => {
        switch (fingerType) {
            case 'index':
                return require('../assets/fingers/index-finger.svg').default;
            case 'middle':
                return require('../assets/fingers/middle-finger.svg').default;
            case 'ring':
                return require('../assets/fingers/ring-finger.svg').default;
            case 'pinky':
                return require('../assets/fingers/pinky-finger.svg').default;
            default:
                return require('../assets/fingers/index-finger.svg').default;
        }
    };

    return (
        <img 
            src={getFingerImage()} 
            alt={`${fingerType} finger`} 
            className="finger-image" 
        />
    );
};

export default FingerImage;