import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchForm from "./SearchForm";
import styled from 'styled-components';

const ButtonDiv = styled.div `
display:flex;
flex-direction:row;
padding:5%;

`




export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacter(res.data.results);
        console.log(res.data.results)
        
      })
      .catch(error => {
        console.error(error,'not displaying!!!')
      })
    
  }, [setCharacter]);
  ////////////////////////useEffect for character ^ and use effect for search below

  
  useEffect(() => {
      const results = character.filter(element =>
          element.name.toLowerCase().includes(searchTerm));
          setSearchResults(results);
  }, [searchTerm]);



  return (
    <section className="character-list">

      <ButtonDiv className='button and search'>
      <button><Link to='/'>Return to Home</Link></button>
      <SearchForm setSearchTerm={setSearchTerm} serchTerm={searchTerm} />
      </ButtonDiv>

      {searchTerm?searchResults.map(e => (
        <CharacterCard key={e.id} char={e} />
         )):character.map(e => (
           <CharacterCard key={e.id} char={e} />
         ))}

      

    </section>
  );
}

