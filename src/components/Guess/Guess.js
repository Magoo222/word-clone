import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ guesses }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p className='guess' key={guesses[row]?.id}>
          {range(0, 5).map((col) => (
            <span className='cell'>
              {guesses[row]?.guess[col].toUpperCase()}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
