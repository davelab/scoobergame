import styled from "styled-components";
import { resetButtonStyle } from "../../StyledApp";

export const StyledContainer = styled.div`
  padding: 0 12px;
  padding-top: 70px;
  padding-bottom: 80px;
  max-width: 900px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
`;

export const StyledFooter = styled.header`
  display: flex;
  justify-content: center;
  height: 75px;
  width: 100%;
  position: fixed;
  color: white;
  box-sizing: border-box;
  bottom: 0;
  padding: 12px;
  align-items: center;
`;

export const StyledMoveButtons = styled.button`
  ${resetButtonStyle}

  margin: 0 6px;
  box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.3);
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: #66a9d8;
  font-size: 20px;
  color: white;
`;
