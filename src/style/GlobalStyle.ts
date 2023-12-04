import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    min-width: 320px;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
`;