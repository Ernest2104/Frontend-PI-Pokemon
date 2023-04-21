import styled from 'styled-components';
import fondo from '../background_landing.png'

export const Body = styled.body`
    display: flex;
    flex-direction: column;
    
    background: url(${fondo});
    height: 94vh;
    /* width: 97.5vw; */
    margin: 0;
    padding: 0;
    border-width:1rem;
    border-style: solid;
    border-color:orange;
    border-radius: 1rem;
    
    h1 {
        color: black; 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        font-size: calc(1.5rem + 2vw); 
        font-weight: bold; 
        letter-spacing: 0.2rem; 
        text-align: center;
        margin-top: 0;
        padding-top: 2%;
        position: relative;
        top: 7%;
    }
`
export const Logo = styled.div`
    margin: 3rem auto;
    img {
        width: calc(15rem + 15vw);
    } 
`
export const Buttons = styled.div`
  
    margin: 3rem auto;
    button {
        padding: 1.3em 3em;
        margin-top: 1rem;
        font-size: (1.5rem + 1.5vw);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: red;
        background-color: yellow;
        border: none;
        border-radius: 5rem;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        &:hover {
            background-color: orange;
            box-shadow: 0px 15px 20px rgba(107, 105, 235, 0.4);
            color: #fff;
            transform: translateY(-7px);
        }
        /* &:active {
        transform: translateY(-1px);
        } */
    }
`
