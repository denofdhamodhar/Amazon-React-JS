import React, { useEffect, useState } from "react";
import "./createAccount.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../UI Components/Navbar/Navbar";
import { createAccount } from "../../../service/authService";
import { CREATEACCOUNT_CONFIG } from "../../../constants/createAccount";

function CreateAccount() {
  let [infoDisplay, setInfoDisplay] = useState("");
  let userdata = {
    username: CREATEACCOUNT_CONFIG.USERNAME,
    password: CREATEACCOUNT_CONFIG.PASSWORD,
  };

  useEffect(() => {
    async function fetchdata() {
      try {
        let response = await createAccount(userdata);
        if (response != undefined) {
          localStorage.setItem(CREATEACCOUNT_CONFIG.LOCAL_ACCESS_TOKEN, response.data.accessToken); // here stringify not used because it's a single data
          setInfoDisplay(CREATEACCOUNT_CONFIG.ACCOUNT_CREATED);
          // window.location.href = "/login"
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className="card"
        style={{
          width: "25rem",
          height: "auto",
          border: "1px solid black",
          boxShadow: "-2px 2px 10px rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="card-body">
          <h5 className="card-title text-white">Default Account Created</h5>
          <p className="text-white">
            Here I am using DummyJSON auth endpoint{" "}
            <a target="_blank" href="https://dummyjson.com/docs/auth">
              {" "}
              <i className="bi bi-box-arrow-up-right text-primary ms-2"></i>{" "}
            </a>
          </p>
          <hr />
          <div className="p-2">
            <h6 className="card-subtitle mb-2">Login credentials</h6>
            <p className="inline-p">
              <span className="h6">userName :</span>{" "}
              <span className="text-white">emilys</span>
            </p>
            <p>
              <span className="h6">Password :</span>{" "}
              <span className="text-white">emilyspass</span>
            </p>
            <p className="text-white text-center">{infoDisplay}</p>
          </div>
          <div className="d-flex justify-content-center">
            <a href="/login" className="btn btn-dark login-btn">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
