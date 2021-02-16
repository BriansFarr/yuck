import React from 'react'
import '../CSS/Header.css'
import logo from '../CSS/mr-yuck-logo.png'

export default function Header() {
  return (
    <div className="yuckHead">
     <img src={logo} alt="logo"/>
    </div>
  )
}
