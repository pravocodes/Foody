import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { Notyf } from "notyf";
import { useAuth } from "../context/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: "center",
      y: "top",
    },
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/login`, { email, password });
      if (res && res.data && res.data.success) {
        notyf.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/home");
      } else {
        notyf.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="Login-container">
        <div className="login-box">
          <div className="login-left"></div>
          <div className="login-right">
            <h1>Foodie</h1>
            <form className="Login-main-form form-group">
              <div className="Login-inputbox">
                <input
                  type="text"
                  required
                  placeholder="Email or Phone Number"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <br />
              <div className="Login-inputbox">
                <input
                  type="Password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <br />
              <div className="login-button">
                <button type="submit" onClick={handlesubmit}>
                  Log In
                </button>
              </div>
            </form>
            <div className="signlink">
              <Link to="/register">
                <span className="no-sign-link">Can't sign in?</span>
              </Link>
            </div>
            <div className="new-register">
              <span>New to Foodie?</span>
              <Link to="/register">Sign up.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
