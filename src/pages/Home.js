import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  background-color: yellow;
`;
const Container = styled.div``;
const Title = styled.h1``;

export const Home = () => {
  return (
    <Section>
      <Container>
        <Title></Title>
      </Container>
    </Section>
  );
};
