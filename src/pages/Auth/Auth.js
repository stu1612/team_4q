import React from "react";
import {useDispatch} from 'react-redux'


const container = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Auth = () => {
    const dispatch = useDispatch();

  return (
    <div style={container}>
      <h1>Auth Page</h1>
      <button onClick={() => dispatch({type:'SIGN_IN'})}>Enter Site</button>
    </div>
  );
};
