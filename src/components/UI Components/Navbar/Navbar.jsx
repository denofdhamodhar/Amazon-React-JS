import React from "react";
import "./navbar.css";
// import logo from "../../../assets/256px-Amazon_logo.svg.png";
import logo from "../../../assets/AmazonLogowhite.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark center-content" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img width="100px" src={logo} alt="Amazon logo" />
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn start-btn-color dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    New User? Start here
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/create-account">
                        Create Account
                      </a>
                    </li>
                   <li>
                      <a className="dropdown-item" href="/login">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
