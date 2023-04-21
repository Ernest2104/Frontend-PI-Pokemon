import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes, filterPokemonsByType, filterCreated, order, cleanPokemons, deletePokemon } from '../actions';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Card from "./Card";
import Paginated from "./Paginated";
import SearchBar from "./SearchBar";
import { Body, Menu, MenuCrear, Order, Filter, OrderFilter} from "./Home.styled"
import logo from '../pngwing.com.png'
import pikachu from '../../src/pikachu2.gif'

export default function Home() {
	const dispatch = useDispatch();
	const history = useHistory();
	const allPokemons = useSelector(state => state.pokemons);
	const allTypes = useSelector(state => state.types);
	const [orden, setOrden] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
	const indexOfLastPokemon = currentPage * pokemonsPerPage // 12
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage // 0
	const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
	
	const paginated = (pageNumber) => {
			setCurrentPage(pageNumber)
	}

	useEffect(() => {
			dispatch(getPokemons());
			dispatch(getTypes());
			return () => {
					dispatch(cleanPokemons())
			}
	}, [dispatch])

	const handleClick = (e) => {
			e.preventDefault();
			dispatch(getPokemons());
			setCurrentPage(1);
	}

	const handlePrevBtn = () => {
			if (currentPage !== 1)
			setCurrentPage(currentPage - 1)
	}
	
	const handleNextBtn = () => {
			if (currentPage !== Math.ceil(allPokemons.length / pokemonsPerPage)) {
					setCurrentPage(currentPage + 1)
			}
	}

	const handleFilterType = (e) => {
			e.preventDefault();
			dispatch(filterPokemonsByType(e.target.value))
	}

	const handleFilterCreated = (e) => {
			e.preventDefault();
			dispatch(filterCreated(e.target.value))
	}

	const resetFilters = () => {
		document.getElementById('nameDesc').checked = false
		document.getElementById('nameAsc').checked = false
		document.getElementById('attackDesc').checked = false
		document.getElementById('attackAsc').checked = false
		document.getElementById('selectCreados').value = 'all'
		document.getElementById('selectTipos').value = 'All'
		dispatch(getPokemons());
	}

	const handleOrder = (e) => {
		dispatch(order(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}
    
	const handleDelete = (id) => {
		Swal.fire({
			title: 'Estás seguro?',
			text: "El pokémon será borrado permanentemente!",
			icon: 'warning',
			showCancelButton: true,
			background: 'linear-gradient(to right, #FDC830, #F37335)',
			cancelButtonText: 'Cancelar!',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, borralo!'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Tu Pokémon fue borrado.',
					showConfirmButton: false,
					background: 'linear-gradient(to right, #FDC830, #F37335)',
					timer: 2500,
				},
					dispatch(deletePokemon(id)),
					dispatch(getPokemons())
				)
			}
			})
	}

	const handleUpdate = async (id) => {
		Swal.fire({
			title: 'Está seguro que quiere modificar este pokémon?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Si',
			denyButtonText: `No`,
			background: 'linear-gradient(to right, #FDC830, #F37335)'
		}).then((result) => {
			if (result.isConfirmed) {
					history.push('/pokemon/update/' + id)
			} else if (result.isDenied) {
				Swal.fire({
					position: 'center',
					icon: 'info',
					title: 'No se hicieron modificaciones.',
					showConfirmButton: false,
					background: 'linear-gradient(to right, #FDC830, #F37335)',
					timer: 1500,
				})
			}
		})
	}

  return (
    <Body>
			<div>
				<Menu>

					<MenuCrear>
							<Link to='/pokemon'><button>Crear Pokemon</button></Link>
							<button onClick={e => handleClick(e)}>Cargar Todos</button>
							<button onClick={resetFilters}>Limpiar Filtros</button>
					</MenuCrear>
						
					<img src={logo} alt="img" /><SearchBar />

					<OrderFilter>
						<Order>
							{/*<p>Ordenamiento</p>*/}
							<fieldset onChange={(e) => handleOrder(e)}>
								<legend>Nombre</legend>
								<label>
									<input id='nameAsc' type='radio' value='asc_name' name='name'/>A-Z</label>
								<label>
									<input id='nameDesc' type='radio' value='desc_name' name='name'/>Z-A</label>
							</fieldset>
							<fieldset onChange={(e) => handleOrder(e)}>
								<legend>Fuerza💪</legend>
								<label>
									<input id='attackAsc' type='radio' value='asc_attack' name='attack'/>Menos Fuerte</label>
								<label>
									<input id='attackDesc' type='radio' value='desc_attack' name='attack'/>Mas Fuerte</label>
							</fieldset>
						</Order>

						<Filter>
							{/*Filtros*/}
							<fieldset>
								<legend>Tipos:</legend>
								<select id='selectTipos' onChange={e => handleFilterType(e)}>
									{
										allTypes && allTypes.map(t => {
											return (
												<>
													<option value={t.name} key={t.id}>
														{t.name}
													</option>
												</>
											)
										})
									}
								</select>
							</fieldset>
							<fieldset>
								<legend>Origen:</legend>
								<select id='selectCreados' onChange={e => handleFilterCreated(e)}>
									<option value='all'>Todos</option>
									<option value='api'>API</option>
									<option value='created'>Base de Datos</option>
								</select>
							</fieldset>
						</Filter>
					</OrderFilter>

				</Menu>

				<Paginated pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} currentPage={currentPage} handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn}/>
				{
					currentPokemons.length > 0 ? currentPokemons.map(p => {
						return (
						<>
							<Card 
								id={p.id}
								attack={p.attack}
								sprite={p.sprite}
								name={p.name} 
								type={typeof p.types[0] === 'object' ? p.types.map(t => t.name + ' ') : p.types.map(t => t + ' ')} 
								createInDb={p.createInDb}
								key={p.id}>
							</Card>
							<button onClick={() => handleUpdate(p.id)} hidden={p.createInDb ? false : true}>✅</button>
							<button onClick={() => handleDelete(p.id)} hidden={p.createInDb ? false : true}>🗑️</button>
						</>
						)
					}) : <img src={pikachu} style={{height:250 }} alt="loading..." />
				}
			</div>
    </Body>
    )
}