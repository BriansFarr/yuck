import React, { useState, useEffect } from 'react';
import Rest from './RestNyc';




const LaSearch = () => {
  

  const [rest, setRest1] = useState([]);
  const [search, setSearch1] = useState('');

  const [query, setQuery1] = useState(' ');
  

  useEffect(() => { getRest1() },[query] );
  
  
  const getRest1 = async () => {
    
    const response = await fetch(`https://data.lacity.org/resource/ckya-qgys.json?$where=starts_with(facility_name, '${query}' )&$limit=20&$order=points DESC`)
    const res = await response.json();
    // console.log(res[0].dba);
    
    const results = res;
    setRest1(results)
  

    

    
    
    
    
  }
  
  const updateSearch = e => {
    setSearch1(e.target.value.toUpperCase());
    
  }

  const getSearch1 = e => {
    e.preventDefault();
    setQuery1(search);
    setSearch1('');
    
  }
  

  return (
    
    
    <div className="LaSearchBar">
  

      <p>Los Angeles Search</p>

      <form  onSubmit = {getSearch1} className = "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">search</button>
      </form>
      
      {rest.map(results => (
        <Rest key= {results.id}
          name={results.facility_name}
          violations={results.violation_description}
          rating={results.score}
          building={results.building}
          street={results.street}
          zipcode={results.zipcode}
          date={results.inspection_date.slice(0,- 13)}
          action={results.action}
          critical={results.critical_flag}
          grade={results.grade}
          boro={results.boro}

        
        />
        
      ))}

    </div>
 
  )
}
export default LaSearch
