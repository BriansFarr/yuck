import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'


export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
      <Link to="/">
        <li>Home</li>
        </Link>
        <Link to ="/nyc">
          <li>NYC</li>
        </Link>
        <Link to="/LA">
          <li>Los Angeles</li>
        </Link>
        < Link to="/chicago">
          <li>Chicago</li>
        </Link>
        < Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}
