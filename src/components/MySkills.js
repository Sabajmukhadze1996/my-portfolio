import React from 'react';
import "../css/myskills.css";
import { GoGear } from "react-icons/go"

import html_css from "../images/html-css.png"
import javascript from "../images/javascript.png"
import bootstrap from "../images/bootstrap.png"
import typescript from "../images/typescript.png"
import sass from "../images/sass.png"
import node from "../images/node.png"
import git from "../images/git.png"
import react_img from "../images/react.png"


export const MySkills = () => {



  return (
    <div className="my-skills-main-container">
      <div className="gear-logo-div">
        <span><GoGear size={62} id="gear-logo" color="#fff5ee" /></span> 
      </div>
      <div className="gear-line-div">
          <div className="gear-line"></div>
      </div>
      <div className="skills-text-div">
        <h1><span>{"<>"}</span>&nbsp;My Skills Are&nbsp;<span>{"</>"}</span></h1>
      </div>



<div className="row row-cols-1 row-cols-sm-3 g-4 skills-cards-main-container">
    <div className="col">
      <div className="card skills-card">
        <img src={html_css} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">HTML5 & CSS3</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card skills-card">
        <img src={javascript} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">JavaScript</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card skills-card">
        <img src={react_img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">React</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card skills-card">
        <img src={bootstrap} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bootstrap</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card skills-card">
        <img src={sass} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sass</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card skills-card">
        <img src={typescript} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">TypeScript</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card skills-card">
        <img src={node} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Node</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card skills-card">
        <img src={git} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Git</h5>
          <hr />
        </div>
      </div>
    </div>
  </div>

















    </div>
  )
}
