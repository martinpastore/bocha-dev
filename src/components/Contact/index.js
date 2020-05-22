import React from "react";
import styled from "styled-components";
import { WiredIconButton } from "wired-elements";
import github from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import twitter from "../../assets/twitter.svg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 2rem;
`;

const Image = styled.img`
  max-width: 64px;
  height: auto;
`;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

const Contact = () => {
  return (
    <div>
      <StyledH1>Contact</StyledH1>
      <Container>
        <Image
          onClick={() => window.open("https://github.com/martinpastore")}
          src={github}
        />
        <Image
          onClick={() => window.open("https://t.me/bochapast")}
          src={telegram}
        />
        <Image
          onClick={() =>
            window.open("https://www.linkedin.com/in/martin-pastore-00a251110/")
          }
          src={linkedin}
        />
        <Image
          onClick={() => window.open("https://twitter.com/bochap_")}
          src={twitter}
        />
        <Image
          onClick={() => window.open("mailto:martinpablopastore@gmail.com")}
          src={email}
        />
      </Container>
    </div>
  );
};

export default Contact;
