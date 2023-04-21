import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailPokemon, cleanDetailPokemon } from "../actions";
import { Body, Card, Button } from "./PokemonDetail.styled"
import pikachu from '../../src/pikachu2.gif'

const PokemonDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	
	useEffect(() => {
		dispatch(getDetailPokemon(id));
		return () => {
				dispatch(cleanDetailPokemon());
		}
	}, [dispatch, id])

	const myPokemon = useSelector(state => state.detail);
	// console.log(myPokemon.length > 0 && myPokemon[0].name)
	return (
		<Body>
			{    
				myPokemon.length > 0 ?
				<Card>
					<h1>{myPokemon[0].name}</h1>
					<div>
							<img src={myPokemon[0].sprite} alt='img not found' />
					</div>
					<h4>Tipos: {typeof myPokemon[0].types[0] === 'object' ? myPokemon[0].types.map(t => t.name + ' ') : myPokemon[0].types.map(t => t + ' ')}</h4>
					<h3>Id: {myPokemon[0].id}</h3>
					<h3>Puntos de vida: {myPokemon[0].hp}</h3>
					<h3>Fuerza: {myPokemon[0].attack}</h3>
					<h3>Defenza: {myPokemon[0].defense}</h3>
					<h3>Velocidad: {myPokemon[0].speed}</h3>
					<h3>Altura: {myPokemon[0].height}</h3>
					<h3>Peso: {myPokemon[0].weight}</h3>
					<br/>
					<Link to='/home'>
						<Button>Home</Button>
					</Link>
				</Card> : <img src={pikachu} style={{height:300 }} alt="loading..." />
			}
		</Body>
	);
}
 
export default PokemonDetail;