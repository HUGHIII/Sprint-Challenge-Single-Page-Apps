import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

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

  return (
    <section className="character-list">
      <button><Link to='/'>Return to Home</Link></button>
      {character.map(e => (
        <CharacterCard key={e.id} char={e} />
        <SearchForm key={e.id} char ={e} />
      ))}
    </section>
  );
}

