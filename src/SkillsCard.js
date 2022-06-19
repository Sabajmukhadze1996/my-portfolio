import React from 'react'
import "./skillscard.css"
import htmlLogo from './html.png'
import cssLogo from './css.png'
import sassLogo from './sass-logo.png'
import bootstrapLogo from './boots.png'
import jsLogo from './js.png'
import tsLogo from './ts.png'
import nodeLogo from './node.png'
import gitLogo from './git.png'
import reactLogo from './react.png'

export const SkillsCard = () => {
  return (
    <>
<div className="skills-cards-div1">

  <div className="html">
    <img id="card-img" src={htmlLogo} alt="img"/>
    <div className="text-div">
       <h1>HTML 5</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={cssLogo} alt="img"/>
    <div className="text-div">
       <h1>CSS 3</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={sassLogo} alt="img"/>
    <div className="text-div">
       <h1>SASS</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={bootstrapLogo} alt="img"/>
    <div className="text-div">
       <h1>BOOTSTRAP</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={jsLogo} alt="img"/>
    <div className="text-div">
       <h1>JAVASCRIPT</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={tsLogo} alt="img"/>
    <div className="text-div">
       <h1>TYPESCRIPT</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={nodeLogo} alt="img"/>
    <div className="text-div">
       <h1>NODE</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={reactLogo} alt="img"/>
    <div className="text-div">
       <h1>REACT</h1>
    </div>
  </div>

  <div className="html">
    <img id="card-img" src={gitLogo} alt="img"/>
    <div className="text-div">
       <h1>GIT</h1>
    </div>
  </div>



</div>
    </>
  )
}
