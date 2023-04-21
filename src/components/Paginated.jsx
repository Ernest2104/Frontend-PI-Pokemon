import React from "react";
import {Nav, Pages} from "./Paginated.styled"

const Paginated = ({ pokemonsPerPage, allPokemons, paginated, handlePrevBtn, handleNextBtn }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
			pageNumbers.push(i)
	}

	return (  
		<Nav>
			<Pages>
				<li >
					<a onClick={handlePrevBtn}>Ant</a>
				</li >
					{ pageNumbers && pageNumbers.map(number => (
						<li onClick={() => paginated(number)} key={number}> 
							<a onClick={() => paginated(number)} >{number}</a>
						</li>
						))
					}
				<li >
					<a onClick={handleNextBtn}>Sig</a>
				</li>
			</Pages>
		</Nav>
	);
}

export default Paginated;