import React from "react";

export default function CharacterCard(props) {
  return (
          <div>
        <h2>{props.char.name}</h2>
            <ul>Character Details</ul>
            <li>{props.char.species}</li>
            <li>{props.char.status}</li>
        </div>
    )
  
  
        
}
