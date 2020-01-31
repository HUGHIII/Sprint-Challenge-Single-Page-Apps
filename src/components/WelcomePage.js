import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Welcome = styled.header `
display:flex;
flex-direction:column;
margin:0 20%;
`
const Img = styled.img `
border-radius:5px;


`

const Button = styled.button `
font-size:20px;
background-color:#33ccff;
border-radius:5px;
padding:2%;
margin-top:5%;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Welcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Button className='charList-button'><Link to='/characters'>Click for List of Characters</Link></Button>

      </Welcome>
    </section>
  );
}
