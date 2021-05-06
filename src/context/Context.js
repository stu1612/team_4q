import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const contextValues = { isLogged, setIsLogged };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
