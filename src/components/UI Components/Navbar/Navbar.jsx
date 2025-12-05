import React, { useEffect, useState } from "react";
import "./navbar.css";
// import logo from "../../../assets/256px-Amazon_logo.svg.png";
import logo from "../../../assets/AmazonLogowhite.png";
import { checkValidUser, fetchUserDatafromLocal } from "../../../utils/utils";
import { Link } from "react-router-dom";
import NavbarSearchInput from "../NavbarSearchInput/NavbarSearchInput";

function Navbar() {
  const [userData, setUserData] = useState({});
  let isUserValid = checkValidUser();

  useEffect(() => {
    if (!isUserValid) return;

    let data = fetchUserDatafromLocal();
    if (data !== undefined) {
      setUserData(data);
    }
  }, [isUserValid]);

  function logoutfn() {
    localStorage.clear();
    location.reload();
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
      >
        <div className="container">
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
          <div className="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              <img width="100px" src={logo} alt="Amazon logo" />
            </Link>
            <NavbarSearchInput />
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {isUserValid && (
                <>
                  <li className="nav-item text-white d-flex justify-content-center align-items-center me-2">
                    <div>{userData.firstName}</div>
                    <div>
                      <img
                        width={30}
                        height={30}
                        src={userData.image}
                        alt="userImage"
                      />
                    </div>
                  </li>
                </>
              )}
              <li>
                {isUserValid ? (
                  <button onClick={() => logoutfn()} className="btn btn-danger">
                    Logout
                  </button>
                ) : (
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
                        <Link className="dropdown-item" to="/create-account">
                          Create Account
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
