import React, { useState, useEffect } from "react";

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
      <form>
        
         <input
          type="text"
          placeholder="Search"
          value={props.searchTerm}
          onChange={handleChange}
        />
        
</form>
    
    </section>
  );
}
