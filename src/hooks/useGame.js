import { useState } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { DELETE_MOVES, MAKE_MOVE, GET_MOVES } from "../graphql/gql";
import { isValidMove, getNextNumber, gameStates } from "../gameUtilities";

const useGame = () => {
  const [makeMove] = useMutation(MAKE_MOVE);
  const [deleteMoves] = useMutation(DELETE_MOVES);
  const { data } = useSubscription(GET_MOVES);
  const [currentGameNumber, setCurrentGameNumber] = useState(0);
  const [myTurn, setMyTurn] = useState(true);

  const handleMakeMove = (moveNumber) => {
    const nextNumber = moveNumber + currentGameNumber;

    if (isValidMove(nextNumber) && currentGameNumber > 1) {
      const [result, calcString] = getNextNumber(moveNumber, currentGameNumber);
      const move = {
        result,
        calcString,
        moveNumber,
        player: myTurn ? "player-1" : "player-2",
      };

      setCurrentGameNumber(result);
      makeMove({ variables: move });

      setMyTurn(!myTurn);
    }
  };

  return {
    moves: data?.moves || [],
    handleMakeMove,
    myTurn,
    setCurrentGameNumber,
    currentGameNumber,
    deleteMoves,
  };
};

export default useGame;
