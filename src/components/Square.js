import React from 'react';

const Square = ({ value, onClick }) => {
  const symbol = value === 'blue' ? '✕' : value === 'red' ? '◯' : null;

  return (
    <button className="square" onClick={onClick}>
      {symbol}
    </button>
  );
};

export default Square;


