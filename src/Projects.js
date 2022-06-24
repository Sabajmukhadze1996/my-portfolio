import React from 'react'
import petCare from './pet-care.png'
import foodInfo from './food-info.png'
import top50Movie from './top-50-movie.png'
import weatherApp from './weather-app.png'
import "./projects.css"


const downArrow = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>


const projectLogo = <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="orange" className="bi bi-cast" viewBox="0 0 16 16">
<path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z"/>
<path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z"/>
</svg>

export const Projects = () => {
  return (
<>
<div className="projects-div">
    <div className="project-btn-div">
      <button onClick={() => window.scrollTo(0, 3300)} className="project-btn">See My Projects {downArrow}</button>
   </div>
   <div className="project-logo-div">
       {projectLogo}
   </div>
   <div className="about-projects-div">
      <p>
          I created several mobile responsive websites with React.JS
      </p>
   </div>
  <div className="main-card-div">

    <div className="inner-card">
      <a href="https://sabajmukhadze1996.github.io/pet-care-app/" target="_blank">
       <img src={petCare} alt="petcare"/>
      </a>
    </div>


    <div className="inner-card">
     <a href="https://sabajmukhadze1996.github.io/food-info/" target="_blank">
       <img src={foodInfo}  alt="foodinfo"/>
     </a>
    </div>


    <div className="inner-card">
       <a href="https://sabajmukhadze1996.github.io/search-movie/" target="_blank">
         <img src={top50Movie}  alt="top50movie"/>
       </a>
    </div>


    <div className="inner-card">
      <a href="https://sabajmukhadze1996.github.io/weather-app/" target="_blank">
        <img src={weatherApp}  alt="weatherapp"/>
      </a>
    </div>


  </div>

</div>
</>
  )
}
