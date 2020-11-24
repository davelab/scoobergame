import React, { useEffect, useState, useContext } from "react";
import { gameStates } from "../gameUtilities";
import { StyledContainer } from "./styles/StyledGame";
import GameStateContext from "../context/gameState";
import {
  StyledStartGameButton,
  StyledStartGame,
} from "./styles/StyledStartGame";
import useGame from "../hooks/useGame";
import { useMutation } from "@apollo/client";
import { CREATE_INIT_NUMBER } from "../graphql/gql";

const GameOver = () => {
  const { setGameState } = useContext(GameStateContext);
  const [createInitNumber] = useMutation(CREATE_INIT_NUMBER);
  const [winner, setWinner] = useState("");
  const { moves } = useGame();

  const resetInitNumber = async () => {
    try {
      await createInitNumber(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => resetInitNumber(), []);

  useEffect(() => {
    if (moves.length) {
      const lastMove = moves && moves[moves.length - 1];
      setWinner(lastMove.player);
    }
  }, [moves]);

  const handleStartAgain = () => {
    setGameState(gameStates.GAME_IN_PROGRESS);
  };

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
