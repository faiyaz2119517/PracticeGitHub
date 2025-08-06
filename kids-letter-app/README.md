# Kids Letter App

## Overview
The Kids Letter App is an interactive educational application designed for young children to help them learn letters and improve their keyboard skills. The app displays a letter and prompts the child to type it using a finger image as a guide. As the child correctly types the letter, it grows in size, providing a visual reward for their efforts. If the child makes a mistake, the app provides feedback through visual effects.

## Features
- Displays a letter for the child to type.
- Shows an image of a finger to guide the child on which finger to use.
- Increases the size of the letter with each correct input.
- Provides visual feedback (screen shake) for incorrect inputs.
- Displays a "Try Again" message in red when the input is incorrect.

## Project Structure
```
kids-letter-app
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── LetterDisplay.tsx
│   │   ├── FingerImage.tsx
│   │   ├── KeyboardInput.tsx
│   │   └── Effects.tsx
│   ├── assets
│   │   └── fingers
│   │       ├── index-finger.svg
│   │       ├── middle-finger.svg
│   │       ├── ring-finger.svg
│   │       └── pinky-finger.svg
│   └── styles
│       └── App.css
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd kids-letter-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Follow the on-screen instructions to interact with the app.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.