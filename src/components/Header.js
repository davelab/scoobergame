import React from "react";
import { Logo } from "./Logo";
import { StyledHeader } from "./styles/StyledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <section>
        <Logo />
        <div>
          <p>Scoober Team</p>
          <small>Win the game or win the job</small>
        </div>
      </section>
    </StyledHeader>
  );
};
