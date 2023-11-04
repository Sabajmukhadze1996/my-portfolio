import React, { useState, useContext, useEffect } from "react";
import { Translation } from "./TranslationContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import { MdClear } from "react-icons/md";
// import TranslationComp from "./TranslationComp";
import andzaLogo from "../images/andza.jpg";
// import bigBenLogo from "../images/big-ben.jpg";
import sound from "../mp-3/mixkit-single-classic-click-1116.wav";


const Navbar = () => {
  const [bar, setBar] = useState(false);
  const [value, setValue] = useState(0);
  const [activeLink, setActiveLink] = useState("active");

  function play() {
    new Audio(sound).play();
  }

  useEffect(() => {
    play();
  }, [value]);

  function changeBarSettings() {
    if (!bar) {
      setBar(true);
    } else {
      setBar(false);
    }
  }

  function scrollTop() {
    return window.scrollTo(0, 0);
  }

  const { content, lang } = useContext(Translation);

  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top`}
      style={{background: scrolling ? "#0f1b3aa6" : "transparent"}}
    >
      <div className="container-fluid">
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink
            onClick={() => {
              scrollTop();
              setActiveLink("active");
              setValue(value + 1);
            }}
            to="/"
            className="navbar-brand"
          >
            <img id="my-logo" src={andzaLogo} alt="My Logo" />
          </NavLink>
          <h1 id="self-title">Saba's Portfolio</h1>
        </div>
        <button
          onClick={changeBarSettings}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {bar ? (
            <MdClear className="navbar-toggler-icon" />
          ) : (
            <AiOutlineBars className="navbar-toggler-icon" />
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink
              to="/"
              onClick={() => {
                scrollTop();
                navigate("/");
                setBar(false);
                setValue(value + 1);
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              className={activeLink}
            >
            About Me
            </NavLink>
            <NavLink
              to="/coding-career"
              onClick={() => {
                scrollTop();
                navigate("/coding-career");
                setBar(false);
                setValue(value + 1);
                setActiveLink("");
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              {/* Coding Career */}
              How It All Began
            </NavLink>
            <NavLink
              to="/my-skills"
              onClick={() => {
                scrollTop();
                navigate("/my-skills");
                setBar(false);
                setValue(value + 1);
                setActiveLink("");
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              {/* {content.my_skills} */}
              Tech Skills
            </NavLink>
            <NavLink
              to="/my-projects"
              onClick={() => {
                scrollTop();
                navigate("/my-projects");
                setBar(false);
                setValue(value + 1);
                setActiveLink("");
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              {/* {content.projects} */}
              Projects & Experience
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
