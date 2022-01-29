import React from 'react';
import axios from 'axios';
import RestNyc from './RestNyc'


export default class LandingPageSearch extends React.Component {
  state = {
    rest: []
  }

  componentDidMount() {
    axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?$limit=20&$order=inspection_date%20DESC`)
      .then(res => {
        const rest = res.data;
        this.setState({ rest: rest });
      })
  }

  render() {
    const {
       rest
    } = this.state;
    return (
      <div>
          {rest.map(results => (
        <RestNyc key= {results.id}
          name={results.dba}
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
}