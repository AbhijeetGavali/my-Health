import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
    
  return (
      <Nav fill variant="tabs" defaultActiveKey="/DashBoard" className="navbar">
        <div>
            <div onClick={null} className="link">
              <i class="fas fa-user-tie"></i>
            </div>
        </div>
        <div>
          <Nav.Link eventKey="/DashBoard" className="link">
            <Link to="/" className="nav-link ">
              <i className="fas fa-home" />
            </Link>
          </Nav.Link>
          <Nav.Link eventKey="Post" className="link">
            <Link to="/Post" className="nav-link">
              <i className="fas fa-book-open" />
            </Link>
          </Nav.Link>
          <Nav.Link eventKey="Event" className="link">
            <Link to="/Event" className="nav-link">
              <i className="fas fa-calendar-plus" />
            </Link>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link eventKey="Setting" className="link">
            <Link to="/Setting" className="nav-link">
              <i className="fas fa-cogs" />
            </Link>
          </Nav.Link>
        </div>
      </Nav>
  );
}
