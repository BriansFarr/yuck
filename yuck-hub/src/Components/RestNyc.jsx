import React from 'react';
// import { Link } from 'react-router-dom';
import "../App.css";



const RestNyc = ({name, violations, rating, building, street, zipcode, critical_flag, date, action, grade, boro}) => {
  return (
    <div className="restContainer">
      <h1>{name}</h1>
      <p>{building} {street}</p>
      <p>{boro} { zipcode }</p>
      <h2>Rating:</h2>
      <h3>{rating}</h3>
      <h2>{critical_flag}</h2>
      <h2>{date}</h2>
      <p>{ action }</p>
      <p>{violations}</p>
      <h3>Grade:</h3>
      <p>{ grade }</p>
     
      
    </div>
  );
}

export default RestNyc

