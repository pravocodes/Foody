import React, { useState } from "react";
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
        navigate(location.state || "/");
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
      <div className="Login-form-container">
        <form className="Login-main-form">
          <h2>Login</h2>
          <div className="Login-inputbox">
            <input
              type="text"
              required
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="Login-inputbox">
            <input
              type="Password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          {/* <div className='links'>
            <button > Sign Up</button>
            <button > Forgot Password</button>
            </div> */}
          <input
            type="submit"
            className="Login-submit-form"
            onClick={handlesubmit}
          ></input>
        </form>
      </div>
    </>
  );
};

export default Login;
