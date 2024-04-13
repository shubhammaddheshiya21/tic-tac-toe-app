import React from 'react';

const Scoreboard = ({ blueScore, redScore }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="scoreboard">
      <div>
        Blue Score: {blueScore}
      </div>
      <div>
        Red Score: {redScore}
      </div>
      <button className="reload-button" onClick={handleReload}>Reload</button>
    </div>
  );
};

export default Scoreboard;


