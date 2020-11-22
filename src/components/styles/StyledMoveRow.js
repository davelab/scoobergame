import styled, { css } from "styled-components";

const roundDiv = (size) => css`
  width: ${size};
  height: ${size};
  border-radius: ${size};
  background-color: #66a9d8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMoveRow = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
  &:nth-child(2n + 1) {
    justify-content: flex-start;
    > section {
      flex-direction: row;
      > div {
        flex-direction: row;
      }
    }
  }

  > section {
    display: flex;
    flex-direction: row-reverse;
    > div {
      flex-direction: row-reverse;
    }
  }
`;

export const StyledMoveNumber = styled.div`
  ${roundDiv("60px")}
`;

export const StyledAvatar = styled.div`
  ${roundDiv("40px")}
`;

export const StyledMoveContent = styled.div`
  background: white;
  box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px;
  color: #212121;
  min-width: 200px;
  margin: 8px;
`;
