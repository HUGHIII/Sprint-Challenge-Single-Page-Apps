import React from "react";
import styled from 'styled-components'
import './characterCard.css';


const Carddiv = styled.div `
background-color:#14737D;
margin:5%;
border-radius: 35px

`
const H2card = styled.h2 `
padding:3%;
`

const Licard = styled.li `
padding:3%;

`



export default function CharacterCard(props) {
  return (
          <Carddiv className='card-div'>
            
        <H2card>{props.char.name}</H2card>
            <ul>Character Details</ul>
            <Licard>{props.char.species}</Licard>
            <Licard>Status: {props.char.status}</Licard>
            
        </Carddiv>

    )
  
  
        
}
