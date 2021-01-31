import React, { useState, useEffect } from 'react';
import Rest from './Rest';



const ChiSearch = () => {
  

  const [rest, setRest2] = useState([]);
  const [search, setSearch2] = useState('');

  const [query, setQuery2] = useState(' ');
  

  useEffect(() => { getRest2() }, [query] );
  
  
  const getRest2 = async () => {
    
    const response = await fetch(`https://data.cityofchicago.org/resource/qizy-d2wf.json?$where=starts_with(aka_name, '${query}' )&$limit=20&$order=inspection_date DESC`)
    const res = await response.json();
    // console.log(res[0].dba);
    
    const results = res;
    setRest2(results)
    console.log(results)
    
    
    
    
  }
  
  const updateSearch = e => {
    setSearch2(e.target.value.toUpperCase());
    
  }

  const getSearch2 = e => {
    e.preventDefault();
    setQuery2(search);
    setSearch2('');
    
  }

  return (
    <div className="ChicagoSearchBar">
  

      <p>Chicago Search</p>

      <form  onSubmit = {getSearch2} className = "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">search</button>
      </form>
      
      {rest.map(results => (
        <Rest key= {results.id}
          name={results.aka_name}
          violations={results.violations}
          rating={results.results}
          building={results.address}
          street={results.city}
          zipcode={results.zip}
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
export default ChiSearch
