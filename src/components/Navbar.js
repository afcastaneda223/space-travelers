import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/planet.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <img alt="Logo" src={logo} />
          <button type="button" className="btn btn-light blue"><h3>Space Travelers&apos; Hub</h3></button>
        </Link>
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
            <li className="nav-item m-2">
              <Link to="/"><button type="button" className="btn btn-light mt-1 text-muted fw-bold"><p>Rockets</p></button></Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/missions"><button type="button" className="btn btn-light mt-1 text-muted"><p>Missions</p></button></Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/profile"><button type="button" className="btn btn-light mt-1 text-muted"><p>Profile</p></button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
