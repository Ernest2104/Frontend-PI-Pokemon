import React from "react";
import { Link } from "react-router-dom";
import { Body, CardContainer, Content, Background } from "./Card.styled"

export default function Card({ id, attack, sprite, name, type, createInDb }) {
    return (
        <Body>
            <CardContainer>
                <Background>
                    <Link to={'/home/'+ id}><img src={sprite} alt="img not found"/></Link>
                </Background>
                <Content>
                    <h1>{name}</h1>
                    <h3>Strength: {attack}</h3>
                    <p>{type}</p>
                </Content>
                {/* <button onClick={handleDelete} hidden={createInDb ? false : true}>x</button> */}
            </CardContainer>
        </Body>
    )
}