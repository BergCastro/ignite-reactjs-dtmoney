import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #f8f2f5;
      --red: #e52e4d;
      --blue: #5429cc;

      --blue-light: #6933ff;

      --text-title: #363f5f;

      --text-body: #969cb3;
      --background: #f0f2f5;
      --snape: #ffffff;
  }  

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

  }

  body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
  }

  button {
      cursor: pointer;
  }

  html { 
      @media (max-width: 1080px) {
          font-size: 93.75%;
      }

      @media (max-width: 728px) {
          font-size: 87.5%;
      }
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }



`;