import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        alert(res.data && res.data.message);
      } else {
        alert("error in registering");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="register-form">
          <div className="register-box">
            <div className="register-box">
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
            <div className="register-box">
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
            <div className="register-box">
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
            <div className="register-box">
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
            <div className="register-box">
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
            <br />
            <div className="button">
              <button type="submit" onClick={handlesubmit}>
                Register
              </button>
              <button>Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
