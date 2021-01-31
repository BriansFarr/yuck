import React from 'react'

export default function About() {
  return (
    <div>
      <h1> About: </h1>
      <p>Made possible using:</p>
      <form action="https://opendata.cityofnewyork.us/">
    <input type="submit" value="NYC Open Data" />
      </form>
      <form action="https://data.lacity.org/">
    <input type="submit" value="Los Angeles Open Data" />
      </form>
      <form action="https://https://www.chicago.gov/city/en/narr/foia/CityData.html.lacity.org/">
    <input type="submit" value="Chicago Open Data" />
      </form>

    </div>
  )
}
