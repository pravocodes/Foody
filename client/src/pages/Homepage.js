import React from "react";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div>
      <h1>Homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <h2>First</h2>
      <div>
        <h1>Frontend Homepage</h1>
        <button>
          <Link to="/register">Signup</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
