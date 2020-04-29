import React from "react";
import styled from "styled-components";
import { WiredLink } from "wired-elements";

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      {/* <Div>
        <wired-link>about</wired-link>
        <wired-link>works</wired-link>
        <wired-link>contact</wired-link>
      </Div> */}
    </Container>
  );
};

export default Header;
