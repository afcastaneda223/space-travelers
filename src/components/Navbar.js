import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/planet.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 sticky-top">
      <div className="container-fluid">
        <NavLink to="/">
          <img alt="Logo" src={logo} />
          <button type="button" className="btn btn-light"><h3>Space Travelers&apos; Hub</h3></button>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav text-end mb-2 mb-lg-0 pe-5">
            <li className="m-2" key="home">
              <NavLink to="/" activeClassName="fw-bold text-decoration-underline" className="link-dark text-decoration-none" exact>Rockets</NavLink>
            </li>
            <li className="m-2" key="mission">
              <NavLink to="/missions" activeClassName="fw-bold text-decoration-underline" className="link-dark text-decoration-none" exact>Missions</NavLink>
            </li>
            <li className="m-2" key="profile">
              <NavLink to="/profile" activeClassName="fw-bold text-decoration-underline" className="link-dark text-decoration-none" exact>Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
