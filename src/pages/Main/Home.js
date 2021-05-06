import React from "react";
import { Navigation } from "../../components/Nav/Nav";

const container = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Home = () => {
  return (
    <div style={container}>
      <Navigation />
      <h1>Home Page</h1>
    </div>
  );
};
