import React from 'react'
import LandingPageSearch from './LandingPageSearch'
import '../CSS/Nav.css'


export default function Landing() {
  return (
    <div className="Home">
      <h1>Welcome to YuckHub!</h1>
      <h2>Click on your city and then search by restaurant name.</h2>
      <h2>Most Recent Ratings:</h2>
      <LandingPageSearch />
    </div>
  )
}
