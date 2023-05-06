import Game from '../Game';
import Header from '../Header';
import PreviousGuesses from '../PreviousGuesses';
import Guess from '../Guess';

import { useState } from 'react';

function App() {
  const [guesses, setGuesses] = useState([]);

  const handleUpdateGuesses = (guess) => {
    const newGuess = { guess, id: Math.random() };
    const newGuesses = [...guesses, newGuess];

    setGuesses(newGuesses);
  };

  return (
    <div className='wrapper'>
      <Header />
      <PreviousGuesses guesses={guesses} />
      <div className='game-wrapper'>
        <Guess guesses={guesses} />
        <Game handleUpdateGuesses={handleUpdateGuesses} />
      </div>
    </div>
  );
}

export default App;
