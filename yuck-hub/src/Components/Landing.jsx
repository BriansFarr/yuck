import React from 'react'
import LandingPageSearch from './LandingPageSearch'
import '../CSS/Nav.css'


export default function Landing() {
  return (
    <div className="Home">
      <h2>Click on your city and then search by restaurant name.</h2>
      <h2>Most Recent NYC Ratings:</h2>
      <LandingPageSearch />
    </div>
  )
}
