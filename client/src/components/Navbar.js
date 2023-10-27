import React from "react";
import { Link } from "react-router-dom";
import home from "./../Pages/user/img/home.PNG";
import search from "./../Pages/user/img/smile.PNG";
import message from "./../Pages/user/img/messenger.PNG";
import like from "./../Pages/user/img/like.PNG";
import create from "./../Pages/user/img/add.PNG";
import cover1 from "./../Pages/user/img/cover 1.png";

const Navbar = () => {
  return (
    <section>
      <div className="sidebar">
        <div className="content">
          <h1>Foodie</h1>
          <hr />
          <ul className="no-bullets">
            <li>
              <Link to="/home">
                <span className="icon">
                  <img src={home} alt="home" />
                </span>
                <span className="text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <span className="icon">
                  <img src={search} alt="home" />
                </span>
                <span className="text">Search</span>
              </Link>
            </li>
            <li>
              <Link to="/messages">
                <span className="icon">
                  <img src={message} alt="home" />
                </span>
                <span className="text">Messages</span>
              </Link>
            </li>
            <li>
              <Link to="/notifications">
                <span className="icon">
                  <img src={like} alt="home" />
                </span>
                <span className="text">Notification</span>
              </Link>
            </li>
            <li>
              <Link to="/create-post">
                <span className="icon">
                  <img src={create} alt="home" />
                </span>
                <span className="text">Create</span>
              </Link>
            </li>
            <li>
              <Link to="/user/profile">
                <span className="icon">
                  <img
                    style={{ borderRadius: "50%" }}
                    src={cover1}
                    alt="home"
                  />
                </span>
                <span className="text">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
