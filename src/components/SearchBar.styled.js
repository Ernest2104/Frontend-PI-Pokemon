import styled from "styled-components";

export const Search = styled.input`
    border: 0;
    margin: 1rem 0.5rem;
    padding: 0.5rem calc(var(--searchButtonWidth) + 0.5rem) 0.5rem 0.5rem;
    border-radius: 0.5rem;
    width: 15rem;
    height: 1.9rem;
    min-height: 0.7rem;
    background: #ddd;
    top:15%;
    font-size: calc(0.55rem + 0.55vw);
    :focus {
        outline: 0;
        background: white;
    }
`
export const Button = styled.button`
    width: 6rem;
    height: 1.9rem;
    min-height: 0.7rem;
    padding: 0.1rem;
    background: rgb(14, 81, 204);
    color: white;
    font-size: calc(0.55rem + 0.55vw);
    border: 1px solid grey;
    border-left: none;
    border-radius: 0.6rem;
    cursor: pointer;
    :hover {
        background: #1b11a5;
    }    
`