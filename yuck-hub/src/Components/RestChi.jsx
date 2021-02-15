import React from 'react';
// import { Link } from 'react-router-dom';
import "../App.css";



const RestChi = ({dba_name, violations, inspection_date, address , city, state, date, zip, grade, results, inspection_type}) => {
  return (
    <div className="restContainer">
      <h1>{dba_name}</h1>
      <p>{address} </p> 
      <p>{ city }</p>
      <p>{ state }, {zip} </p>
      <h2>Inspection Date:</h2>
      <p>{inspection_date}</p>
      <h2>Violations:</h2>
      <p>{violations}</p>
      <h2>{date}</h2>
      <p>{ inspection_type }</p>
    
      <h3>Results:</h3>
      <p>{ results }</p>
     
      
    </div>
  );
}

export default RestChi
