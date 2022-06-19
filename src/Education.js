import React from 'react'
import "./education.css"
import GTU from './university.png'

const downArrow = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>

const bookLogo = <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="orange" className="bi bi-book-fill" viewBox="0 0 16 16">
<path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>

const dateLogo = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="orange" className="bi bi-calendar2-event-fill" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg>

export const Education = () => {
  return (
<>
  <div className="education-div">
     <div className="education-btn-div">
       <button onClick={() => window.scrollTo(0, 2300)} className="education-btn">Education {downArrow}</button>
     </div>
     <div className="education-book-div">
         {bookLogo}
     </div>
<div className="university-main-div">
<div className="card mb-3 university-card-div">
    <img src={GTU} className="card-img-top" alt="university" id="gtu-img" />
    <div className="card-body">
      <h5 className="card-title">Georgian Technical <br /> University<span id="span">.</span></h5>
      <ul>
        <li>Start Date - 2014</li>
        <li>End Date - 2018</li>
        <li>Bachelor's Degree In Architecture<span id="span">.</span></li>
      </ul>
    </div>
</div>
</div>     
  

  </div>
 </>
  )
}
