import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
  font-family: 'Montserrat', sans-serif;
}

  /* Box sizing rule for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  } 

  body, span, div, header{
    margin: 0px;
    padding: 0px
  }

`

export default GlobalStyle;