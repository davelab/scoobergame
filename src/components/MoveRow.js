import React from "react";
import {
  StyledMoveRow,
  StyledAvatar,
  StyledMoveNumber,
  StyledMoveContent,
} from "./styles/StyledMoveRow";

const MoveRow = ({ move }) => {
  return (
    <StyledMoveRow>
      <section>
        <StyledMoveNumber>{move.moveNumber}</StyledMoveNumber>
        <div>
          <StyledMoveContent>{move.calcString}</StyledMoveContent>
          <StyledMoveContent>{move.result}</StyledMoveContent>
        </div>
      </section>
    </StyledMoveRow>
  );
};

export default MoveRow;
