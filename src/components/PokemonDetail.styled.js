import styled from "styled-components";

export const Body = styled.body`
    width: 100vw;
    overflow: hidden;
`
export const Card = styled.div`
    font-family: 'Roboto Mono', monospace;
    width: 30%;
    border-radius: 3rem;
    padding: 0.5rem;
    margin: 0 auto;
    
    ::before {
        content: '';
        background: radial-gradient(#ffffff, #f8b500);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 1rem;
        top: 1rem;
        z-index: -1;
    }

    div {
        display: flex;
        justify-content: center;  
        img {
            width: calc(8rem + 8vw);
        }
    }
    h1 {
        font-size: calc(1.5rem + 1.5vw);
        font-style: italic;
    }
    
    h3 {
        min-width: auto;
        display: table;
        padding: 0.1rem;
        margin: 0.5rem;
        font-size: calc(0.6rem + 0.6vw);
    }
    h4 {
        padding: 0.4rem;
        margin: 0.4rem;
        border-radius: 0.4rem;
        border: 1px dashed red;
        font-size: calc(0.65rem + 0.65vw);
        color: darkblue;
    }
`
export const Button = styled.button`
    margin-top: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: calc(0.55rem + 0.55vw);
    border-radius: 0.5rem;
    color:black;
    padding:0.7rem 1.5rem;
    background-color:lightgrey;
    cursor: pointer;
    :hover {
        background-color:grey;
    }
`