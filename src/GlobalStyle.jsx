import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Poppins", sans-serif;
        overflow-x: hidden;
    }


    
   
`

export default GlobalStyled;