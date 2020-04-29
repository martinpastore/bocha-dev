import React from "react";
import styled from "styled-components";
import { WiredImage } from "wired-elements";
import Picture from "../../assets/13.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 0 2rem;
`;

const List = styled.ul`
  list-style: none;
`;

const Title = styled.h2`
  padding-left: 40px;
`;

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Container>
        <wired-image
          style={{
            width: 300,
            height: "auto",
          }}
          src={Picture}
          elevation={3}
        ></wired-image>
        <Info>
          <Title>Martín Pastore</Title>
          <List>
            <li>I'm {new Date().getFullYear() - 1994} years old.</li>
            <li>
              I have been working in the software industry for more than 4
              years.
            </li>
            <li>Actually, I'm working as Full Stack Developer.</li>
            <li>
              I'm a JavaScript passionate and I really enjoy learning new
              implementations and new technologies.
            </li>
          </List>
        </Info>
      </Container>
    </div>
  );
};

export default About;
