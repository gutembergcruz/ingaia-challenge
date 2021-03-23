import { createGlobalStyle } from 'styled-components';

import bg from '../../assets/bg.jpg';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body{
        background-image: url(${bg});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 100vh;
    }
`;
