import React from "react";
import styled from "styled-components";
import { WiredLink } from "wired-elements";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 976px) {
    padding: 0 1rem;
  }
`;

const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <h2>bocha.DEV</h2>
    </Container>
  );
};

export default Header;
