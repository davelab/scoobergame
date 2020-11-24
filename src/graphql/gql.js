import { gql } from "@apollo/client";

export const GET_MOVES = gql`
  subscription {
    moves {
      id
      player
      result
      calcString
      moveNumber
    }
  }
`;

export const GET_INIT_NUMBER = gql`
  query {
    initNumber
  }
`;

export const MAKE_MOVE = gql`
  mutation(
    $player: String!
    $result: Int!
    $moveNumber: Int!
    $calcString: String!
  ) {
    makeMove(
      player: $player
      result: $result
      moveNumber: $moveNumber
      calcString: $calcString
    )
  }
`;

export const CREATE_INIT_NUMBER = gql`
  mutation($initNumber: Int) {
    createInitNumber(initNumber: $initNumber)
  }
`;

export const DELETE_MOVES = gql`
  mutation($input: String) {
    deleteMoves(input: $input)
  }
`;
