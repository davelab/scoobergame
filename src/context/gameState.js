import React, { useState } from "react";
import { gameStates } from "../gameUtilities";

const GameStateContext = React.createContext();

export const GameStateProvider = ({ children }) => {
  const [gameState, setGameState] = useState(gameStates.CHOOSE_PLAYER);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateContext;
