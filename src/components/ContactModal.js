import React from 'react'
import "../css/contactmodal.css"
import { AiTwotoneHome } from "react-icons/ai"
import { AiFillMobile } from "react-icons/ai"
import { MdMarkEmailUnread } from "react-icons/md"

export const ContactModal = () => {
  return (
<div className="contact-btn-div">
         <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
           Contact me
         </button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header contact-modal-main-div" id="contact-modal-title">
        <h5 className="modal-title" id="staticBackdropLabel">Contact</h5>
        <button type="button" className="btn-close contact-x-btn" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" id="contact-pop-up">
        <ul>
            <li><AiTwotoneHome id="home-logo" size={30} /> Address: Tbilisi, Didi-Dighomi</li>
            <li><AiFillMobile id="mobile-logo" size={30} /> Mobile Number: 558 57 61 42</li>
            <li><MdMarkEmailUnread id="email-logo" size={30} /> Email: sabajmukhadze23@gmail.com</li>
        </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-secondary close-btn" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

       </div>
  )
}
