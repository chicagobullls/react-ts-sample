import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
    font-size: 1.4rem;
    align-items: stretch;
    background-color: #242424;

    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: transparent;
      scrollbar-width: thin;
      scrollbar-color: #E8E8E8 #FFFFFF;
    }

    #root {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles
