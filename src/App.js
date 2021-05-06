import React from "react";
import { OnLoad } from "./pages/OnLoad";
import { Main } from "./pages/Index";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return <div>{isLogged ? <Main /> : <OnLoad />}</div>;
}

export default App;
