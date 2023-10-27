import React from "react";
import Navbar from "../../components/Navbar";
import cover1 from "./img/cover 1.png";
import { useAuth } from "../../context/auth";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <div className="d-flex">
        <Navbar />
        <section className="main">
          <div className="profile">
            <span>
              <img src={cover1} alt="profile" />
            </span>
            <span>{auth.user.username}</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
