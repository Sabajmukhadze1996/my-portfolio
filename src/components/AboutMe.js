import React from 'react'
import "../css/aboutme.css"
import { BsPersonBoundingBox } from "react-icons/bs"
import tbilisiImg from "../images/tbilisi-night-1.png";
import javascript_cert from "../images/javascript-cert.png"
import responsive_design from "../images/responsive-design.png"
import GTU_IMG from "../images/gpi.png"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { BsBook } from "react-icons/bs"

export const AboutMe = () => {
  return (
    <div className="main-about-me">
     <div className="person-logo-div">
        <span><BsPersonBoundingBox size={52} id="person-logo" color="#fff5ee" /></span> 
     </div>
     <div className="person-line-div">
      <h1 style={{color: "#fff5ee", margin: "0.5rem", fontSize: "2.1rem", letterSpacing: "1px", fontWeight: "200"}}>
        Georgia, Tbilisi
      </h1>
          <div className="person-line"></div>
      </div>
     
     <div className="img-line-cont">
       <div className="img-line"></div>
     </div>

<div className="tbilisi-img-container">
  <img src={tbilisiImg} alt="tbilisi-at-night"/>
</div>

<div className="about-me-text">
<p>
<span>H</span>ello, my name is Saba Jmukhadze from Tbilisi, Georgia, I'm self taught Front-end developer My main focus is on details, in general this is what programmer needs, I have always wondered how games and websites were created so, one day I decided to study on my own, I think university or college is not necessary to become a professional The main thing is to work with yourself as much as possible. my goal is to gain experience at work and daily learning for self-development.
</p>
</div>

<div className="about-me-text">
<p>
<span>I</span>&nbsp;
 started learning to code from freeCodeCamp.org, see my certifications links down below, then continued learning from YouTube, as usual like all self-taught developers do, but I'm not the type of person who watches tutorials all day long on how to do this or that, in my opinion real learning starts with practice, you should definitely build some projects, at first you will make a lot of mistakes, but practice will change everything for the better...
</p>
</div>

<div className="certification-title px-2">
  <p>External links <br /> <BsFillArrowDownCircleFill color="#fff5ee"  size={23}  /></p>
</div>


<div className="cards-main-container">
     <a href="https://www.freecodecamp.org/certification/fcc6669bd89-570b-476d-9d21-4cd5ea0aef2b/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">
      <img src={javascript_cert} className="cert-img" alt="..." />
      </a>
      <a href="https://www.freecodecamp.org/certification/fcc6669bd89-570b-476d-9d21-4cd5ea0aef2b/responsive-web-design" target="_blank" rel="noreferrer">
        <img src={responsive_design} className="cert-img" alt="..." />
      </a>
</div>


<div className="education-title px-2">
  <p>Education <br /> <BsBook color="#fff5ee"  size={23}  /></p>
</div>

<div className="education-outer-div">
<div className="education-div">
<div className="card" style={{width: "20rem"}}>
    <img src={GTU_IMG} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-center">Georgian Technical University</h5>
      <p className="card-text"><li>Bachelor's Degree In Architecture.</li></p>
    </div>
  </div>
</div>
</div>


    </div>
  )
}


