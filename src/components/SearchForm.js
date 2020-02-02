import React, { useState, useEffect } from "react";
import './searchForm.css';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';


export default function SearchForm(props) {


  
    
  const handleChange = event => {
      props.setSearchTerm(event.target.value);
      
  };
  
  
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);


  // useEffect(() => {
  //     const results = props.char.filter(element =>
  //         element.name.toLowerCase().includes(searchTerm));
  //         setSearchResults(results);
  // }, [searchTerm]);

  return (
    <section className="search-form">
      
      <button><Link to='/'>Return to Home</Link></button>
      <form>
        
         <input
          type="text"
          placeholder="Search by Name"
          value={props.searchTerm}
          onChange={handleChange}
        />
        
</form>
    
    </section>
  );
}
