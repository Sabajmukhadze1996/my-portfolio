import React from 'react'
import { Contact } from './Contact';
import { Education } from './Education';
import { Footer } from './Footer';
import { Projects } from './Projects';
import myImage from './saba.jpg'
import { SkillsCard } from './SkillsCard';

const downArrow = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>

const bellIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" className="bi bi-bell-fill" viewBox="0 0 16 16">
<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>

const toolIcon = <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="orange" className="bi bi-wrench-adjustable-circle" viewBox="0 0 16 16">
<path d="M12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z"/>
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8Zm-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z"/>
</svg>


function App() {
  return (
    <div className="App">
      <div className="app-inner-div">
         <div className="welcome-div">
           <h1>Welcome</h1>
         </div>
         <div className="img-div mt-2">
            <img src={myImage} id="my-img" alt="my-image" />
         </div>
         <div className="name-div mt-5">
            <h1>Hello<span id="dot">.</span> I'm Saba Jmukhadze, Self Taught</h1>
            <h1 id="dev-text">Front End Web Developer<span id="dot">.</span></h1>
         </div>
         <Contact />
         <div className="about-button-div">
           <button onClick={() => window.scrollTo(0, 800)} className="about-btn">More about me {downArrow}</button>
        </div>
        <div className="bell-div">
           {bellIcon}
        </div>
        <div className="about-div">
          <p className="about-text">
            Hi, my name is Saba Jmukhadze from Tbilisi, Georgia,
            I'm self taught Front-end developer
            My main focus is on details, in general
            this is what programmer needs,
            I have always wondered how games and websites
            were created so, one day I decided to study on
            my own, I think university
            or college is not necessary to become a professional
            The main thing is to work with yourself as much as possible.
            my goal is to gain experience at work and daily learning for self-development. 
          </p>
        </div>
        <div className="skill-button-div">
          <button onClick={() => window.scrollTo(0, 1200)} className="skills-btn">My skills {downArrow}</button>
        </div>
        <div className="skill-div">
            {toolIcon}
        </div>
        <div className="skills-card-div">
           <SkillsCard />
        </div>
        <Education />
        <Projects />
      </div>
        <Footer />
    </div>
  );
}

export default App;
