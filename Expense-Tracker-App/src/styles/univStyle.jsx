import { createGlobalStyle } from 'styled-components'

const UnivStyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }

        :root{
            --primary-color: #222260;
            --primary-color2: 'color: rgba(34, 34, 96, .6)';
            --primary-color3: 'color: rgba(34, 34, 96, .6)';
            --color-green: #42ad00;
            --color-grey: #aaa;
            --color-accent: #1b070d;
            --color-delete: #FF0000;
        }

        body {
            font-family: "Exo 2", sans-serif;
            font-size: clamp(1rem, 1.5vw, 1.2rem);
            overflow: hidden;
            color: rgba(0, 0, 0, 0.6)
        }


`;
export default UnivStyle