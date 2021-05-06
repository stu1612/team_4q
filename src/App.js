import React from "react";
import { Navigation } from "./components/Nav/Nav";
import { Main } from "./components/Main/Main";
// import { AppContextProvider } from "./context/Context";
// import { AppContext } from "./context/Context";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <>
    {isLogged ? <Main /> : <Navigation />}
    </>
    );
}

export default App;
