import React, { useState, useEffect } from 'react';
import Rest from './RestNyc';
import '../CSS/SearchBar.css';

const NycSearch = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  const getRestaurantData = async () => {
    try {
      const response = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?$where=starts_with(dba, '${query}' )&$limit=${pageSize}&$offset=${page * pageSize}&$order=inspection_date DESC`);
      const data = await response.json();

      const searchResults = data.map(result => ({
        id: result.id,
        name: result.dba,
        violations: result.violation_description,
        rating: result.score,
        building: result.building,
        street: result.street,
        zipcode: result.zipcode,
        date: result.inspection_date.slice(0, -13),
        action: result.action,
        critical: result.critical_flag,
        grade: result.grade,
        boro: result.boro,
      }));

      setRestaurants(searchResults);
    } catch (error) {
      console.error(error);
      alert('There was an error getting the restaurant data. Please try again later.');
    }
  };

  useEffect(() => {
    getRestaurantData();
  }, [query, page]);

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setQuery(searchTerm);
    setSearchTerm('');
    setPage(0);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  return (
    <div className="NycSearchBar">
    <p>NYC Search</p>
    <form onSubmit={handleSearchSubmit} className="search-form">
      <input
        className="search-bar"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button className="search-button" type="submit">
        search
      </button>
    </form>
    {restaurants.map(result => (
      <Rest
        key={result.id}
        name={result.name}
        violations={result.violations}
        rating={result.rating}
        building={result.building}
        street={result.street}
        zipcode={result.zipcode}
        date={result.date}
        action={result.action}
        critical={result.critical}
        grade={result.grade}
        boro={result.boro}
      />
    ))}
    {page > 0 && (
      <button onClick={handlePrevClick}>Previous</button>
    )}
    {restaurants.length === pageSize && (
      <button onClick={handleNextClick}>Next</button>
    )}
  </div>
);
};

export default NycSearch;



