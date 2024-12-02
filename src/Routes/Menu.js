import React from 'react'
import "./pages.css"
import {Outlet,  NavLink} from "react-router-dom"

function Menu() {
  
  return (
    <div className='bar'>
      <NavLink className='back' to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </NavLink>
       <nav>
          <ul>
          <li>
              <NavLink className={({isActive})  => (isActive ? "nav active" : "nav")} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})  => (isActive ? "nav active" : "nav")} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})  => (isActive ? "nav active" : "nav")} to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})  => (isActive ? "nav active" : "nav")} to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})  => (isActive ? "nav active" : "nav")} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Menu