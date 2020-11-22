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

export const DELETE_MOVES = gql`
  mutation($input: String) {
    deleteMoves(input: $input)
  }
`;
