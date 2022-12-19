import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../CSS/Nav.css'
import Nav from './Nav'

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'NYC',
    to: '/nyc',
  },
  {
    label: 'Los Angeles',
    to: '/LA',
  },
  {
    label: 'Chicago',
    to: '/chicago',
  },
  {
    label: 'About',
    to: '/about',
  },
]

function App() {
  return (
    <div className="App">
      <Nav title="My App" links={links} />
      {/* Other components here */}
    </div>
  )
}

export function NavLinkList({ links }) {
  return (
    <ul className="Nav-list">
      {links.map(link => (
        <li key={link.to} className="Nav-item">
          <NavLink to={link.to} className="Nav-link">{link.label}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default function Nav({ title, links }) {
  return (
    <nav className="Nav">
      {title && <h1 className="Nav-title">{title}</h1>}
      <NavLinkList links={links} />
    </nav>
  )
}