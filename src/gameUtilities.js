export const possibleMoves = ["-1", "0", "1"];

export const isValidMove = (number) => {
  return number % 3 === 0;
};

export const getNextNumber = (move, number) => {
  const result = (move + number) / 3;
  const calcString = `[(${move} + ${number}) / 3] = ${result}`;
  return [result, calcString];
};

export const getInitNumber = () => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};

export const getValidMoveNumber = (number) => {
  const validMove = possibleMoves.filter((move) => {
    return isValidMove(parseInt(move) + number) && move;
  });

  return validMove[0];
};

export const gameStates = {
  CHOOSE_PLAYER: "STATE_CHOOSE_PLAYER",
  GAME_IN_PROGRESS: "STATE_GAME_IN_PROGRESS",
  GAME_OVER: "STATE_GAME_OVER",
};
