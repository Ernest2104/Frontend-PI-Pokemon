import styled from "styled-components";
import fondo from '../../src/yCKv80D.jpeg';

export const Body = styled.body`
    background: linear-gradient(to right, #FDC830, #F37335);
    min-height: 96vh;
    font-family:'Roboto Mono', monospace;
`
export const Menu = styled.div`
    /* border: 1px solid red; */
    height: 12rem;
    background-image: url(${fondo});
    img {
        width: calc(10rem + 10vw);
        margin-left: auto;
        margin-right: auto;
    }
`
export const MenuCrear = styled.div`
    position: absolute;
    display: block;
    right: 2%;
    height: 11rem;
    width: 12rem;
    font-family: Arial, Helvetica, sans-serif;
    border: 0.3rem outset lightgray;
    button {
        margin: 0.65rem;
        width: 10rem;
        height: 2.5rem;
        font-size: calc(0.4rem + 0.4vw);
        border-radius: 0.5rem;
        color:black;
        padding:0.5rem 0.5rem;
        background-color:lightgray;
        display:inline-block;
        cursor: pointer;
        :hover {
            background-color:grey;
        }
    }
`
export const OrderFilter = styled.div`
    top: 2%;
    left: 1.5%;

    position: absolute;
    display: inline;
    width: 15%;
`
export const Order = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    /* border: 1px solid black; */
    position: absolute;
    height: auto;
    width: 17rem;
    p {
        font-size: calc(2rem + 2vw);
    }
    input {
        margin-left: 5%;
    }

    fieldset {
        font-size: calc(0.4rem + 0.4vw);
        font-style: normal;
        border-radius: 0.5rem;
        border-color: lightgoldenrodyellow;
        margin: 0.1rem;
    }
    legend {
        font-size: calc(0.4rem + 0.4vw);
        font-weight: bold;
    }
`
export const Filter = styled.div`
    /* border: 1px solid black; */
    position: absolute;
    top: 2%;
    left: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    position: relative;
    height: auto;
    width: 17rem;

    p {
        font-size: calc(1rem + 1vw);
    }
    fieldset {
        border-radius: 0.5rem;
        border-color: lightgoldenrodyellow;
        width: 90%;
        
    }
    legend {
        font-size: calc(0.4rem + 0.4vw);
        font-style: normal;
        font-weight: bold;
    }
    select {
        background: beige;
        font-size: calc(0.4rem + 0.4vw);
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
        height: 1.7rem;
        overflow: hidden;
        width: 90%;
    }
`