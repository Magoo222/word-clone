import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { useState } from 'react';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ handleUpdateGuesses }) {
  const [word, setWord] = useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        handleUpdateGuesses(word);
      }}
    >
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        id='guess-input'
        type='text'
        value={word}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        onChange={(event) => {
          setWord(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default Game;
