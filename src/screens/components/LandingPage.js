import React from "react";
import { Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import auth from "./auth/authentication";

import BackgroundLandingPAge from "../img/backgroundLandingPAge.jpg";

export const LandingPage = (props) => {
  if (auth.isAuthenticated()) {
    return <Redirect to="/Dashboard" />;
  } else {
    return (
      <>
        <div className="imp-text my-4 mx-3 p-5 text-center">
          <h2>Welcome To My Health App</h2>
          <p>
            Mobile Application That Keeps Medical Report/History Of Students
          </p>
        </div>
        <img src={BackgroundLandingPAge} className="BackgroundLandingPAge" />
        <div className="d-flex">
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/null"
            className="landingNavBar"
          >
            <Nav.Link eventKey="/" className="link">
              <Link to="/Register" className="nav-link ">
                Register with us
              </Link>
            </Nav.Link>
            <Nav.Link eventKey="Post" className="link">
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link eventKey="Event" className="link">
              <Link to="/Post" className="nav-link">
                Go to Post
              </Link>
            </Nav.Link>
          </Nav>
        </div>
      </>
    );
  }
};
