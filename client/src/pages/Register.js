import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Notyf } from "notyf";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const res = await axios.post("api/v1/auth/register", {
        username,
        name,
        phone: number,
        email,
        password,
      });
      if (res || res.data || res.data.success) {
        notyf.success(res.data && res.data.message);
      } else {
        notyf.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      notyf.error("Something went wrong");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="left"></div>
        <div className="right">
          <h1>Sign Up</h1>
          <form className="Login-main-form form-group">
            <div className="register-inputbox">
              {/* <label htmlFor="username">Username: </label> */}
              <input
                type="text"
                placeholder="username"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div
              className="group"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="register-inputbox-group">
                {/* <label htmlFor="name">Name</label> */}
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div
                className="register-inputbox-group"
                style={{ marginLeft: "15px" }}
              >
                {/* <label htmlFor="Mobile Number">Mobile Number</label> */}
                <input
                  type="number"
                  placeholder="Mobile Number"
                  id="Mobile Number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="register-inputbox">
              {/* <label htmlFor="Email">Email</label> */}
              <input
                type="text"
                placeholder="Email"
                id="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-inputbox">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                placeholder="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="register-button">
              <button type="submit" onClick={handlesubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
