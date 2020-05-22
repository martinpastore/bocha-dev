import React from "react";
import styled, { withTheme } from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";
import { WiredLink } from "wired-elements";
import { darkTheme } from "../../styles/theme/theme";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 976px) {
    padding: 0 1rem;
  }
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

const Header = ({ onSetTheme, theme }) => {
  return (
    <Container>
      <StyledH2>bocha.DEV</StyledH2>
      <DarkModeToggle
        onChange={() => onSetTheme()}
        checked={!!(theme === darkTheme)}
      />
    </Container>
  );
};

export default withTheme(Header);
