import React, { useEffect, useState } from "react";
import styled from "styled-components";
import works from "../../assets/works.json";
import { WiredImage } from "wired-elements";

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 33%;
`;

const Detail = styled.div`
  text-align: left;
  padding-left: 1rem;
`;

const Works = () => {
  return (
    <div>
      <h1>Works</h1>
      <Container>
        {works &&
          works.data &&
          works.data.map((work) => (
            <Content>
              <wired-image
                style={{ width: 100, height: "auto" }}
                elevation={2}
                src={work.image}
              ></wired-image>
              <Detail>
                <h2>{work.company}</h2>
                <h3>{work.job}</h3>
                <span>{work.date}</span>
              </Detail>
            </Content>
          ))}
      </Container>
    </div>
  );
};

export default Works;
