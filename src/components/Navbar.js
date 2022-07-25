import React from 'react'
import { NavLink } from "react-router-dom"
import "../css/navbar.css"
import { AiOutlineBars } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import {useState} from "react";

export const Navbar = () => {
const [bar, setBar] = useState(false);

function changeBarSettings() {
    if (!bar) {
        setBar(true)
    } else {
        setBar(false)
    }
}

function scrollTop() {
  return window.scrollTo(0, 0)
}

  return (
<nav className="navbar navbar-expand-md fixed-top">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">Saba's Portfolio</NavLink>
    <button onClick={changeBarSettings} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {bar ? <MdClear  className="navbar-toggler-icon"/>  : <AiOutlineBars className="navbar-toggler-icon"/> }
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <NavLink onClick={scrollTop} to="/">Home</NavLink> 
        <NavLink onClick={scrollTop} to="/about-me">About Me</NavLink> 
        <NavLink onClick={scrollTop} to="/my-skills">My Skills</NavLink>
        <NavLink onClick={scrollTop} to="/my-projects">My Projects</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

