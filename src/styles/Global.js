import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html, body {
        color: ${props => (props.whiteColor ? 'blue' : 'black')};
        font-family: 'Muli', sans-serif;
        background: #0d1117
    }
    
`