import React, { useState, useEffect } from 'react';
import { StaticRouter } from 'react-router-dom/cjs/react-router-dom.min';
import RestChi from './RestChi';



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
        <RestChi key= {results.id}
          dba_name={results.dba_name}
          violations={results.violations}
          rating={results.results}
          address={results.address}
          city={results.city}
          zip={results.zip}
          inspection_date={results.inspection_date.slice(0,- 13)}
          results={results.results}
          state={results.state}

        
        />
        
      ))}

    </div>
 
  )
}
export default ChiSearch
