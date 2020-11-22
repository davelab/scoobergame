import React, { useEffect, useState, useContext } from "react";
import { gameStates } from "../gameUtilities";
import { StyledContainer } from "./styles/StyledGame";
import GameStateContext from "../context/gameState";
import {
  StyledStartGameButton,
  StyledStartGame,
} from "./styles/StyledStartGame";
import useGame from "../hooks/useGame";

const GameOver = () => {
  const { setGameState } = useContext(GameStateContext);
  const [winner, setWinner] = useState("");
  const { moves } = useGame();

  useEffect(() => {
    if (moves.length) {
      const lastMove = moves && moves[moves.length - 1];
      setWinner(lastMove.player);
    }
  }, [moves]);

  const handleStartAgain = () => {
    setGameState(gameStates.GAME_IN_PROGRESS);
  };

  console.log(winner);

  return (
    <StyledStartGame>
      <h1>{moves && winner === "player-1" ? "You win" : "You Lose"}</h1>
      <StyledStartGameButton onClick={handleStartAgain}>
        play again
      </StyledStartGameButton>
    </StyledStartGame>
  );
};

export default GameOver;
