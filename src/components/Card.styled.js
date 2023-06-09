import styled from 'styled-components';

export const Body = styled.body`
    margin: 0.1rem 1rem;
    padding: 0px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display: inline-flex;
`    
export const CardContainer = styled.div`
    background: linear-gradient(to right, #fad61f, #fad61f);
    width: 15rem;
    height: 17.5rem;
    margin: 0.4rem;
    padding: 0.6rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 15px black;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, #f5e593, #fff2af);
    padding: 0.3rem;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    h1 {
        margin:0px;
        font-style:italic;
        font-size: calc(0.8rem + 0.8vw);
        font-weight: lighter;
        padding: 0.2rem;
    }
    h3 {
        font-size: calc(0.4rem + 0.4vw);
        font-weight: lighter;
        letter-spacing: 1px;
        margin: 0px;
    }
    p{
        width: auto;
        background-color: black;
        padding: 0.5rem;
        color: white;
        border-radius: 0.4rem;
        top: 10%;
        margin: 4%;
    }
`
export const Background = styled.div`
    background: linear-gradient(to right,#b09711,#504921);
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;

    img{
        
        width: 10rem;
        height: 10rem;
    }
    img:hover {
        transform: scale(1.1);
    }
`