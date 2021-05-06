import React from "react";
import { Nav } from "./Nav.theme";
import {useSelector, useDispatch} from 'react-redux'

export const Navigation = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <Nav>
      <h1>Navigation</h1>
      <h3>I am {counter} years old</h3>
      <button onClick={() => dispatch({type:'SIGN_IN'})}>Enter Site</button>
    </Nav>
  );
};
