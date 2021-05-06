import React from "react";
import { Container } from "./Main.theme";
import { useSelector, useDispatch } from "react-redux";

export const Main = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>Hello Main</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <h1>{counter}</h1>
    </Container>
  );
};
