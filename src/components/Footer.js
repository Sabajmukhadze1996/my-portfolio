import React from 'react'
import "../css/footer.css"
import { SiLinkedin } from "react-icons/si"
import { VscGithubInverted } from "react-icons/vsc"

export const Footer = () => {
 
  return (
    <footer>
     <div className="d-flex justify-content-center gap-5">
       <a href="https://www.linkedin.com/in/saba-jmukhadze-54067a23b/" target="_blank" 
         rel="noreferrer"><SiLinkedin id="footer-link-linkedin" size={24}/>
       </a>
       <a href="https://github.com/sabajmukhadze1996" target="_blank" 
        rel="noreferrer"><VscGithubInverted id="footer-link-github"  size={24}/>
       </a>
     </div>
     <div className="rights-reserved-div">
        <span>All Rights Reserved By Saba Jmukhadze</span>
     </div>
     <div className="copyright-div d-flex justify-content-center">
        <span>Copyright &copy; 2022</span>
     </div>
    </footer>
  )
}
