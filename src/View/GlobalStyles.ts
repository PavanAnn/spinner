import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700%7CRoboto:400,500,700&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
  } 

  *:focus {
    outline: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-weight: 300;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    text-rendering: optimizeLegibility;
    overflow: hidden;
  }
  
  @media (max-width: 991px){
    body, html {
        overflow-x: hidden;
    }
  }

  
  button:focus, a:focus {
    outline: none;
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .tippy-popper {
    word-break: break-all;
  }

  
  .row {
    > div{
        padding-right:10px;
        padding-left:10px;
      }
  }

  .ps__rail-y {
    z-index: 3;
  }

  input:disabled, input:read-only  {
    border-bottom: 2px dotted #d2d1d1;
    color: #5e5e5e;
    cursor: not-allowed;
  }

  div > strong {
    white-space: nowrap;
  }

  .error {
    overflow: auto!important;
  }

  .wizard-steps {
    max-width: 700px;
    width: 100%;
    margin: auto;
    margin-top: 20px;
  }
`

export default GlobalStyle