import React from "react";
import { Main } from "./pages/Main/Index";
import { Auth } from "./pages/Auth/Auth";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return <div>{isLogged ? <Main /> : <Auth />}</div>;
}

export default App;
