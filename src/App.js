import React, { useState, useEffect } from 'react';
import './styles.css';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [blueScore, setBlueScore] = useState(parseInt(localStorage.getItem('blueScore')) || 0);
  const [redScore, setRedScore] = useState(parseInt(localStorage.getItem('redScore')) || 0);
  const [currentPlayer, setCurrentPlayer] = useState('blue');

  useEffect(() => {
    localStorage.setItem('blueScore', blueScore);
  }, [blueScore]);

  useEffect(() => {
    localStorage.setItem('redScore', redScore);
  }, [redScore]);

  const updateScore = (winner) => {
    if (winner === 'blue') {
      setBlueScore(prevBlueScore => prevBlueScore + 1);
    } else if (winner === 'red') {
      setRedScore(prevRedScore => prevRedScore + 1);
    }
  };

  const changePlayer = () => {
    setCurrentPlayer(prevPlayer => (prevPlayer === 'blue' ? 'red' : 'blue'));
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Scoreboard blueScore={blueScore} redScore={redScore} />
      <Board currentPlayer={currentPlayer} updateScore={updateScore} changePlayer={changePlayer} />
    </div>
  );
};

export default App;
