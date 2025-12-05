import React, { useState } from "react";
import "./login.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../UI Components/Navbar/Navbar";
import { login } from "../../../service/authService";
import { LOGIN_CONFIG } from "../../../constants/login";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    usernameError: false,
    passwordError: false,
  });

  const navigate = useNavigate()

  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();

    // console.log(userLoginData.username, userLoginData.password)
    // by using useState we cannot call setError two times because the state cycle not completed
    //so here we copy errorMsg and  created variable for various time changes the object

    let tempErrorHandle = { errorMsg };
    let hasErrors = false;

    if (userLoginData.username.length === 0) {
      hasErrors = true;
      tempErrorHandle = { ...tempErrorHandle, usernameError: true }; // don't forgot to use ...tempErrorHandle instead of ...errorMsg
    } else {
      tempErrorHandle = { ...tempErrorHandle, usernameError: false };
    }

    if (userLoginData.password.length === 0) {
      hasErrors = true;
      tempErrorHandle = { ...tempErrorHandle, passwordError: true };
    } else {
      tempErrorHandle = { ...tempErrorHandle, passwordError: false };
    }

    setErrorMsg({ ...tempErrorHandle }); // here it should be {...tempErrorHandle} ✅ not {tempErrorHandle}❌

    if (hasErrors == false) {
      let token = localStorage.getItem("accessToken");
      if (
        token != undefined &&
        userLoginData.username === "emilys" &&
        userLoginData.password === "emilyspass"
      ) {
        async function fetchUserData() {
          try {
            let response = await login();
            let userData = {
              firstName : response.data.firstName,
              lastName : response.data.lastName,
              image : response.data.image
            }
            localStorage.setItem("OG_Data",JSON.stringify(userData));
            localStorage.setItem("status", response.status)
            if (response.status == 200) {
              navigate("/")
            }
          } catch (error) {
            console.log(error);
          }
        }
        fetchUserData();
      } else {
        setLoginErrorMsg(LOGIN_CONFIG.LOGIN_ERROR_MSG)
      }
    }
  };
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
          <h5 className="card-title text-white">Login</h5>
          <p className="text-white">
            Here I am using DummyJSON auth endpoint{" "}
            <a target="_blank" href="https://dummyjson.com/docs/auth">
              {" "}
              <i className="bi bi-box-arrow-up-right text-primary ms-2"></i>{" "}
            </a>
          </p>
          <hr />
          <div className="p-2">
            <form>
              <div className="mb-3">
                <label htmlFor={"exampleInputEmail1"} className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) =>
                    setUserLoginData({
                      ...userLoginData,
                      username: e.target.value,
                    })
                  }
                />
                <div className="form-text text-danger">
                  {errorMsg.usernameError ? LOGIN_CONFIG.VAILD_USERNAME_ERROR_MSG : ""}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor={"exampleInputPassword1"} className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) =>
                    setUserLoginData({
                      ...userLoginData,
                      password: e.target.value,
                    })
                  }
                />
                <div className="form-text text-danger">
                  {errorMsg.passwordError ? LOGIN_CONFIG.VAILD_PASSWORD_ERROR_MSG : ""}
                </div>
              </div>
              <button
                onClick={(e) => handleLogin(e)}
                className="btn btn-success  me-2"
              >
                Login
              </button>
              <button className="btn btn-dark ">
                <a href="/create-account">Create account</a>
              </button>
              <div className="pt-4 text-center text-danger">
                {
                  loginErrorMsg
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
