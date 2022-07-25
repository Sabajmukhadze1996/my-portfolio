import React from 'react'
import "../css/myprojects.css"
import  { FaReact} from "react-icons/fa"

import solar_system from "../images/solar-system.png";
import pet_care from "../images/pet-care.png"
import food_info from "../images/food-info.png"
import weather_app from "../images/weather-app.png"
import search_movie from "../images/movie-app.png"

export const MyProjects = () => {
  return (
    <div className="my-projects-main-container">
      <div className="gear-logo-div">
       <span><FaReact size={70} id="react-logo" color="#fff5ee" /></span>
      </div>
      <div className="projects-line-div">
          <div className="projects-line"></div>
      </div>
      <div className="projects-description-div">
          <p>
          I created several mobile responsive websites with React.JS.
          Just click on the one you like and see.
          </p>
      </div>
      <div className="about-me-text">
       <p>
         <span>N</span>ote! 
         They are still to be refined, I worked on average two days on each project, I will definitely update them in the near future, I'm currently learning different React libraries, the most famous one is React-Redux, it helps the application state managment, when application is getting larger.
       </p>
      </div>
<div className="row row-cols-1 row-cols-sm-3 g-4 skills-cards-main-container">
    <div className="col">
     <a href="https://sabajmukhadze1996.github.io/solar-system/" target="_blank" rel="noreferrer">
      <div className="card skills-card" id="projects-cards">
        <img src={solar_system} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="projects-card-text">
            Solar System <br /> App
          </h5>
          <hr />
        </div>
      </div>
      </a>
    </div>
    <div className="col">
      <a  href="https://sabajmukhadze1996.github.io/pet-care-app/" target="_blank" rel="noreferrer">
      <div className="card skills-card" id="projects-cards">
        <img id="pet-care-img" src={pet_care} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="projects-card-text">
           Pet Care <br /> App
          </h5>
          <hr />
        </div>
      </div>
      </a>
    </div>
    <div className="col">
     <a  href="https://sabajmukhadze1996.github.io/food-info/" target="_blank" rel="noreferrer">
      <div className="card skills-card" id="projects-cards">
        <img id="food-info-img" src={food_info} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="projects-card-text">
           World's Cuisine <br /> App
          </h5>
          <hr />
        </div>
      </div>
      </a>
    </div>
    <div className="col">
     <a  href="https://sabajmukhadze1996.github.io/search-movie/" target="_blank" rel="noreferrer">
      <div className="card skills-card" id="projects-cards">
        <img id="search-movie-img" src={search_movie} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="projects-card-text">
            Top 50 Movie <br /> App
          </h5>
          <hr />
        </div>
      </div>
      </a>
    </div>
    <div className="col">
      <a  href="https://sabajmukhadze1996.github.io/weather-app/" target="_blank" rel="noreferrer">
      <div className="card skills-card" id="projects-cards">
        <img id="weather-app-img" src={weather_app} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id="projects-card-text">
          Weather <br /> App
          </h5>
          <hr />
        </div>
      </div>
      </a>
    </div>
</div>
</div>
  )
}
