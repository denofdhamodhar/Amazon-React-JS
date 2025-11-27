import React from "react";
import "./createAccount.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../UI Components/Navbar/Navbar";

function CreateAccount() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="card" style={{ width: "25rem", height: "auto", border: "1px solid black", boxShadow : "-2px 2px 10px rgba(0, 0, 0, 0.6)" }}>
        <div className="card-body">
          <h5 className="card-title text-white">Default Account Created</h5>
          <p className="text-white">Here I am using DummyJSON auth endpoint <a target="_blank" href="https://dummyjson.com/docs/auth"> <i class="bi bi-box-arrow-up-right text-primary ms-2"></i> </a></p>
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
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-success me-2 ">
              <a href="https://dummyjson.com/users">For more login id's</a>
            </button>
            <button type="button" class="btn btn-primary ">
              <a href="/login">Login</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
