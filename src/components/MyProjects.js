import React, { useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/myprojects.css";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GrNode } from "react-icons/gr";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import solar_system from "../images/solar-system.png";
import pet_care from "../images/pet-care.png";
import food_info from "../images/food-info.png";
import weather_app from "../images/weather-app.png";
import search_movie from "../images/movie-app.png";
import trader_ticket from "../images/trade-ticket.png";
import eCommerce from "../images/comm.png";
import bazarGe from "../images/bazarge.png";
import yourselfge from "../images/yourself.png";
import Fade from "react-reveal";

const MyProjects = () => {
  const { content } = useContext(Translation);

  return (
    <div className="my-projects-main-container">
      <Fade>
        <div className="gear-logo-div">
          <span className="frameworks-container">
            <FaReact size={52} id="react-logo" color="#61DAFB" />
            <HiArrowNarrowRight size={24} id="nodejs-logo" color="#999" />
            <SiNextdotjs
              style={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                boxShadow: "0px 0px 0px 1px #61DAFB",
              }}
              size={51}
              color="#000A99"
            />
            <HiArrowNarrowRight size={24} id="nodejs-logo" color="#999" />
            <GrNode size={51} id="nodejs-logo" color="#68A063" />
          </span>
        </div>
        <div className="projects-line-div">
          <div className="projects-line"></div>
        </div>
        {/* <div className="projects-description-div">
          <p>
            <span id="projects-created-title">{content.created_title}.</span>
          </p>
        </div> */}

        <h1 className="full-stack-title">
          Full-Stack Projects (React.js & Next.js & Node.js)
        </h1>

        <div className="full-stack-projects-container">
          <div
            className="card"
            id="new-project-container"
            style={{
              maxWidth: "40rem",
              backgroundColor: "transparent",
              margin: "0 auto",
              marginTop: "3rem",
            }}
          >
            <a
              rel="noreferrer"
              target="_blank"
              href="https://yourselfge.vercel.app/"
            >
              <img
                loading="lazy"
                decoding="async"
                src={yourselfge}
                className="card-img-top "
                alt="e-commerce"
              />
              <div className="full-stack-card-body">
                <h5
                  className="card-title"
                  style={{ color: "#fff", letterSpacing: "0.8px" }}
                >
                  {/* {content.my_new_project_title} */}
                  Yourself.ge
                </h5>
                <p
                  className="card-text"
                  style={{
                    color: "#fff",
                    letterSpacing: "0.8px",
                    lineHeight: "1.8rem",
                  }}
                >
                  When I embarked on the development of an e-commerce website,
                  my primary objective was to significantly improve the overall
                  user experience by streamlining website navigation and
                  enriching the features available in product descriptions and
                  category organization.
                </p>
                <button
                  id="new-project-btn"
                  className="mt-2"
                  style={{
                    width: "200px",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  {content.view_project}
                </button>
              </div>
            </a>
          </div>

          <div
            className="card"
            id="new-project-container"
            style={{
              maxWidth: "40rem",
              backgroundColor: "transparent",
              margin: "0 auto",
              marginTop: "3rem",
            }}
          >
            <a
              rel="noreferrer"
              target="_blank"
              href="https://bazarge.vercel.app/"
            >
              <img
                loading="lazy"
                decoding="async"
                src={bazarGe}
                className="card-img-top "
                alt="e-commerce"
              />
              <div className="full-stack-card-body">
                <h5
                  className="card-title"
                  style={{ color: "#fff", letterSpacing: "0.8px" }}
                >
                  {/* {content.my_new_project_title} */}
                  Georgian New E-commerce Platform
                </h5>
                <p
                  className="card-text"
                  style={{
                    color: "#fff",
                    letterSpacing: "0.8px",
                    lineHeight: "1.8rem",
                  }}
                >
                  {content.bazargeDesc}
                </p>
                <button
                  id="new-project-btn"
                  className="mt-2"
                  style={{
                    width: "200px",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  {content.view_project}
                </button>
              </div>
            </a>
          </div>

          <div
            className="card"
            id="new-project-container"
            style={{
              maxWidth: "40rem",
              backgroundColor: "transparent",
              margin: "0 auto",
              marginTop: "3rem",
            }}
          >
            <a
              rel="noreferrer"
              target="_blank"
              href="https://sabajmukhadze1996.github.io/e-commerce"
            >
              <img
                loading="lazy"
                decoding="async"
                src={eCommerce}
                className="card-img-top "
                alt="e-commerce"
              />
              <div className="full-stack-card-body">
                <h5
                  className="card-title"
                  style={{ color: "#fff", letterSpacing: "0.8px" }}
                >
                  {content.my_new_project_title}
                </h5>
                <p
                  className="card-text"
                  style={{
                    color: "#fff",
                    letterSpacing: "0.8px",
                    lineHeight: "1.8rem",
                  }}
                >
                  {content.my_new_project_text}
                </p>
                <button
                  id="new-project-btn"
                  className="mt-2"
                  style={{
                    width: "200px",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  {content.view_project}
                </button>
              </div>
            </a>
          </div>
        </div>

        <h1
          style={{ marginTop: "1rem", paddingBottom: "2rem" }}
          className="full-stack-title"
        >
        Below are my projects from when I was <br /> a junior developer
        </h1>


        <div className="d-flex justify-content-center align-items-center pt-2">
          <BsFillArrowDownCircleFill color="#fff5ee" size={33} />
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3 skills-cards-main-container">
          <div className="col">
            <a
              href="https://sabajmukhadze1996.github.io/trade-ticket/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card skills-card" id="projects-cards">
                <img
                  style={{
                    width: "190px",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                  decoding="async"
                  id="solar-system-img"
                  src={trader_ticket}
                  className="card-img-top"
                  alt="Trade-Ticket"
                />
                <div className="card-body">
                  <h5 className="card-title" id="projects-card-text">
                    Trade-Ticket <br /> App
                  </h5>
                  <button className="btn btn-outline-secondary form-control text-light">
                    {content.view_project}
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="https://sabajmukhadze1996.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card skills-card" id="projects-cards">
                <img
                  loading="lazy"
                  decoding="async"
                  id="weather-app-img"
                  src={weather_app}
                  className="card-img-top"
                  alt="Weather-App"
                />
                <div className="card-body">
                  <h5 className="card-title" id="projects-card-text">
                    Weather <br /> App
                  </h5>
                  <button className="btn btn-outline-secondary form-control text-light">
                    {content.view_project}
                  </button>
                </div>
              </div>
            </a>
          </div>

          <div className="col">
            <a
              href="https://sabajmukhadze1996.github.io/solar-system/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card skills-card" id="projects-cards">
                <img
                  loading="lazy"
                  decoding="async"
                  id="solar-system-img"
                  src={solar_system}
                  className="card-img-top"
                  alt="Solar-System"
                />
                <div className="card-body">
                  <h5 className="card-title" id="projects-card-text">
                    Solar System <br /> App
                  </h5>
                  <button className="btn btn-outline-secondary form-control text-light">
                    {content.view_project}
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="https://sabajmukhadze1996.github.io/pet-care-app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card skills-card" id="projects-cards">
                <img
                  loading="lazy"
                  decoding="async"
                  id="pet-care-img"
                  src={pet_care}
                  className="card-img-top"
                  alt="Pet-Care"
                />
                <div className="card-body">
                  <h5 className="card-title" id="projects-card-text">
                    Pet Care <br /> App
                  </h5>
                  <button className="btn btn-outline-secondary form-control text-light">
                    {content.view_project}
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="https://sabajmukhadze1996.github.io/food-info/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card skills-card" id="projects-cards">
                <img
                  loading="lazy"
                  decoding="async"
                  id="food-info-img"
                  src={food_info}
                  className="card-img-top"
                  alt="Food-Info"
                />
                <div className="card-body">
                  <h5 className="card-title" id="projects-card-text">
                    World's Cuisine <br /> App
                  </h5>
                  <button className="btn btn-outline-secondary form-control text-light">
                    {content.view_project}
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="https://sabajmukhadze1996.github.io/search-movie/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card skills-card" id="projects-cards">
                <img
                  loading="lazy"
                  decoding="async"
                  id="search-movie-img"
                  src={search_movie}
                  className="card-img-top"
                  alt="Search-Movie"
                />
                <div className="card-body">
                  <h5 className="card-title" id="projects-card-text">
                    Top 50 Movie <br /> App
                  </h5>
                  <button className="btn btn-outline-secondary form-control text-light">
                    {content.view_project}
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MyProjects;
