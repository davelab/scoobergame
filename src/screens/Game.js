import React, { useEffect, useContext } from "react";

import {
  StyledContainer,
  StyledMoveButtons,
  StyledFooter,
} from "./styles/StyledGame";
import MoveRow from "../components/MoveRow";
import useGame from "../hooks/useGame";
import {
  getInitNumber,
  getValidMoveNumber,
  possibleMoves,
  gameStates,
} from "../gameUtilities";
import GameOver from "./GameOver";
import GameStateContext from "../context/gameState";

let initNumber = 0;

export const Game = () => {
  const bottomDivRef = React.useRef(null);

  const { setGameState } = useContext(GameStateContext);

  const {
    handleMakeMove,
    setCurrentGameNumber,
    currentGameNumber,
    myTurn,
    moves,
    deleteMoves,
  } = useGame();

  useEffect(() => {
    // TODO generate random number from the GraphQL server
    deleteMoves();
    initNumber = getInitNumber();
    setCurrentGameNumber(initNumber);
  }, []);

  useEffect(() => {
    console.log(currentGameNumber);
    if (currentGameNumber === 1) {
      setGameState(gameStates.GAME_OVER);
    }

    bottomDivRef.current.scrollIntoView({
      behavior: "smooth",
    });

    if (!myTurn) {
      const validMove = getValidMoveNumber(currentGameNumber);
      handleMakeMove(parseInt(validMove), currentGameNumber);
    }
  }, [myTurn, currentGameNumber, handleMakeMove, getValidMoveNumber]);

  return (
    <>
      <StyledContainer>
        <h3>{initNumber}</h3>
        <div>
          {moves.map((move) => (
            <MoveRow key={move.result} move={move} />
          ))}
        </div>
        <div ref={bottomDivRef} />
      </StyledContainer>
      <StyledFooter>
        {possibleMoves.map((move) => (
          <StyledMoveButtons
            key={move}
            disabled={!myTurn}
            onClick={() => handleMakeMove(parseInt(move), currentGameNumber)}
          >
            {move}
          </StyledMoveButtons>
        ))}
      </StyledFooter>
    </>
  );
};
