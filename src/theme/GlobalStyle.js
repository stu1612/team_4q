import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-y:hidden;
  }

`;

export default GlobalStyle;
