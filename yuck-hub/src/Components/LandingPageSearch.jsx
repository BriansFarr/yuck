import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestNyc from './RestNyc';

const LandingPageSearch = () => {
  const [restaurantInspectionData, setRestaurantInspectionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://data.cityofnewyork.us/resource/43nn-pn8j.json?$limit=5&$offset=${(currentPage - 1) * 20}&$order=inspection_date%20DESC`
        );
        setRestaurantInspectionData(res.data);
        setTotalPages(Math.ceil(res.headers['x-total-count'] / 5));
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (error) {
    return <p>There was an error loading the data: {error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      {restaurantInspectionData.map((results) => (
        <RestNyc
          key={results.id}
          name={results.dba}
          violations={results.violation_description}
          rating={results.score}
          building={results.building}
          street={results.street}
          zipcode={results.zipcode}
          date={results.inspection_date.slice(0, -13)}
          action={results.action}
          critical={results.critical_flag}
          grade={results.grade ? results.grade : ''}
          boro={results.boro}
        />
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
    </div>
  );
};

export default LandingPageSearch;

