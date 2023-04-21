import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";
import { Search, Button } from "./SearchBar.styled"

const SearchBar = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

const handleInputChange = (e) => {
  e.preventDefault();
  setName(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (name !== ''){ 
  	dispatch(getNamePokemons(name));
    setName('');
  } else alert('debe ingresar un nombre!!')
}

  return (  
    <div>
      <Search type='search' placeholder="ingrese nombre exacto..." onChange={handleInputChange} value={name}/>
      <Button type='submit' onClick={handleSubmit}>Buscar</Button>
    </div>
  )
}

export default SearchBar;