import styled from "styled-components";
import { resetButtonStyle } from "../../StyledApp";

export const StyledStartGame = styled.div`
  height: 100%;
  width: 100%;
  background-color: #66a9d8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    display: block;
    color: white;
  }
`;

export const StyledStartGameButton = styled.button`
  ${resetButtonStyle}
  min-width: 200px;
  height: 50px;
  text-align: center;
  background-color: white;
  color: #66a9d8;
  font-size: 20px;
  border-radius: 50px;
  margin: 20px 0;
  padding: 0 30px;
`;
