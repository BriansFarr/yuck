import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav>
       <Link to="/">
        </Link>
      <ul className="nav-Links">
        <Link to ="/nyc">
          <li>NYC</li>
        </Link>
        <Link to="/LA">
          <li>Los Angeles</li>
        </Link>
        < Link to="/chicago">
          <li>Chicago</li>
        </Link>
      </ul>
    </nav>
  )
}
