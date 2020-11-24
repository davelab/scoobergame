import React, { useEffect, useContext } from "react";

import {
  StyledContainer,
  StyledMoveButtons,
  StyledFooter,
} from "./styles/StyledGame";
import MoveRow from "../components/MoveRow";
import useGame from "../hooks/useGame";
import useInitNumber from "../hooks/useInitNumber";
import {
  getValidMoveNumber,
  possibleMoves,
  gameStates,
} from "../gameUtilities";
import GameStateContext from "../context/gameState";

export const Game = () => {
  const bottomDivRef = React.useRef(null);
  const { setGameState } = useContext(GameStateContext);
  const [initNumber, loading] = useInitNumber();

  const {
    handleMakeMove,
    setCurrentGameNumber,
    currentGameNumber,
    myTurn,
    moves,
    deleteMoves,
  } = useGame();

  useEffect(() => {
    deleteMoves();
    setCurrentGameNumber(initNumber);
  }, [initNumber]);

  useEffect(() => {
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
        {!loading && (
          <>
            <h3>{initNumber}</h3>
            <div>
              {moves.map((move) => (
                <MoveRow key={move.result} move={move} />
              ))}
            </div>
          </>
        )}
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
