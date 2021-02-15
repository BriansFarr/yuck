import React, { useState, useEffect } from 'react';
import Rest from './RestNyc';
import '../CSS/SearchBar.css'



const NycSearch = () => {
  

  const [rest, setRest] = useState([]);
  const [search, setSearch] = useState('');

  const [query, setQuery] = useState(' ');
  

  useEffect(() => { getRest() }, [query] );
  
  
  const getRest = async () => {
    
    const response = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?$where=starts_with(dba, '${query}' )&$limit=20&$order=inspection_date DESC`)
    const res = await response.json();
    // console.log(res[0].dba);
    
    const results = res;
    setRest(results)
    console.log(results)
    
    
    
    
  }
  
  const updateSearch = e => {
    setSearch(e.target.value.toUpperCase());
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    
  }

  return (
    <div className="NycSearchBar">
  

      <p>NYC Search</p>

      <form  onSubmit = {getSearch} className = "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">search</button>
      </form>
      
      {rest.map(results => (
        <Rest key= {results.id}
          name={results.dba}
          violations={results.violation_description}
          rating={results.score}
          building={results.building}
          street={results.street}
          zipcode={results.zipcode}
          date={results.inspection_date}
          action={results.action}
          critical={results.critical_flag}
          grade={results.grade}
          boro={results.boro}
        
        />
        
      ))}

    </div>
 
  )
}
export default NycSearch


