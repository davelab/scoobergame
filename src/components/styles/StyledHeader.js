import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 52px;
  width: 100%;
  position: fixed;
  color: white;
  box-sizing: border-box;
  padding: 12px;
  background-color: #66a9d8;

  > section {
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }

  p {
    margin: 0;
  }
`;
