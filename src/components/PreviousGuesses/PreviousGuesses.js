import React from 'react';

function PreviousGuesses({ guesses }) {
  const prevGuess = guesses.map(({ guess, id }) => {
    return (
      <p className='guess' key={id}>
        {guess}
      </p>
    );
  });

  return <div className='guess-results'>{prevGuess}</div>;
}

export default PreviousGuesses;
