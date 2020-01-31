import React from "react";
import styled from 'styled-components'
import { Badge } from 'reactstrap';

const Carddiv = styled.div `
background-color:silver;
margin:5%;
border-radius: 3px

`
const H2card = styled.h2 `
padding:3%;
`

const Licard = styled.li `
padding:3%;

`



export default function CharacterCard(props) {
  return (
          <Carddiv>
            
        <H2card>{props.char.name}</H2card>
            <ul>Character Details</ul>
            <Licard>{props.char.species}</Licard>
            <Licard>{props.char.status}</Licard>
            
        </Carddiv>

    )
  
  
        
}
