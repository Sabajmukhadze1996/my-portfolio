import React from 'react'
import "../css/homepage.css"
import myImg from "../images/saba.jpg"
import { FaReact } from "react-icons/fa"
import { ContactModal } from './ContactModal'

export const HomePage = () => {
  return (
    <div className="main-homepage-container">
     <div className="react-logo-div">
        <span><FaReact size={70} id="react-logo" color="#fff5ee" /></span> 
     </div>
        <div className="line-div">
          <div className="line"></div>
        </div>

     <div className="homepage-main-card-div">
       <img src={myImg} alt="..." />
       <div className="text-div">
         <h1 className="text-center">Welcome...</h1>
         <p>
         I'm Saba Jmukhadze, Self-Taught
         Front-End Web Developer.
         </p>
       </div>
     </div>
     <ContactModal />
    </div>
  )
}

