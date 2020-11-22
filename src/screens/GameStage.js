import React, { useContext } from "react";
import { Game } from "./Game";
import GameOver from "./GameOver";
import { StartGame } from "./StartGame";
import { gameStates } from "../gameUtilities";
import GameStateContext from "../context/gameState";

const gameStages = {
  [gameStates.CHOOSE_PLAYER]: <StartGame />,
  [gameStates.GAME_IN_PROGRESS]: <Game />,
  [gameStates.GAME_OVER]: <GameOver />,
};

const GameStage = () => {
  const { gameState } = useContext(GameStateContext);
  return gameStages[gameState];
};

export default GameStage;
