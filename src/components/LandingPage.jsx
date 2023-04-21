import React from "react";
import { Link } from 'react-router-dom';
import logo from '../pngwing.com.png'
import { Body, Logo, Buttons } from './LandingPage.styled'

const closeWindow = () => {
    window.open("about:blank","_self").close() 
}

export default function LandingPage() {
    return(
        <Body>
            <h1>WELCOME TO MY POKÉMONS SPA</h1>
            <Logo>
                <img src={logo} alt='logo'/>
            </Logo>
            <Buttons>
                <Link to="/home" >
                    <button>Ingresar</button>
                </Link>
                <p><button onClick={closeWindow}>Cerrar</button></p>
            </Buttons>
        </Body>
    )
}
