import { useState } from 'react';
import '../App.css';
import {Outlet,  NavLink} from "react-router-dom"

function Layout() {
  
  const [showNav , setShowNav] = useState(false)
  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  return (
    <>
      <div className= "all">
      <div className="navbar">
        <h3><span>OYE</span>TECH</h3>
        <nav>
          <button className='menu' onClick={handleShowNav} style={{background: "none",border: "none",cursor: "pointer",padding: 0, margin: 0}}>
                <svg xmlns="http://www.w3.org/2000/svg" id='menu' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
          </button>
          <ul className={showNav ? "show active" : "show"}>
            <li onClick={handleShowNav}>
              <NavLink className={({isActive})  => (isActive ? "navlink active" : "navlink")} to="/">Home</NavLink>
            </li>
            <li onClick={handleShowNav}>
              <NavLink className={({isActive})  => (isActive ? "navlink active" : "navlink")} to="/about">About</NavLink>
            </li>
            <li onClick={handleShowNav}>
              <NavLink className={({isActive})  => (isActive ? "navlink active" : "navlink")} to="/skills">Skills</NavLink>
            </li>
            <li onClick={handleShowNav}>
              <NavLink className={({isActive})  => (isActive ? "navlink active" : "navlink")} to="/projects">Projects</NavLink>
            </li>
            <li onClick={handleShowNav}>
              <NavLink className={({isActive})  => (isActive ? "navlink active" : "navlink")} to="/contact">Contact</NavLink>
            </li>
            
          </ul>
          
        </nav>
  
      </div>
      <Outlet/>
    </div>
    
  
    </>
  );
}

export default Layout;
