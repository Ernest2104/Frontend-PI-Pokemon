import styled from "styled-components";

export const Nav = styled.nav`
    margin-right: 6rem;
    display: flex;
    justify-content: end;
`
export const Pages = styled.ul`
    padding: 0;
    margin: 0.4rem;
    cursor: pointer;
    font-weight: bold;
    font-size: calc(0.4rem + 0.4vw);
    li {
        display: inline-flex;
	    margin-right:0.7rem;
        a {
            border: 1px solid black;
	        padding:0.4rem 0.9rem;
	        color:black;
	        background: antiquewhite;
	        text-decoration: none;
        }
        a:active {
            background:black;
	        font-weight:bold;
        }
        a:hover:not(.active) {
            background:orangered;
        }
    }
`