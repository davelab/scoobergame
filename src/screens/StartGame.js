import React, { useContext } from "react";
import {
  StyledStartGame,
  StyledStartGameButton,
} from "./styles/StyledStartGame";
import { gameStates } from "../gameUtilities";
import GameStateContext from "../context/gameState";

export const StartGame = () => {
  const { setGameState } = useContext(GameStateContext);

  return (
    <StyledStartGame>
      <StyledStartGameButton
        onClick={() => {
          setGameState(gameStates.GAME_IN_PROGRESS);
        }}
      >
        Start Game
      </StyledStartGameButton>
      {/* <StyledStartGameButton>Start Game with Player</StyledStartGameButton> */}
    </StyledStartGame>
  );
};
