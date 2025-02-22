import React from "react";
import styles from "./diffcss/Main.module.css";

const Main = () => {
  return (
    <>
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#listing">
                    Listing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#house">
                    Blocks
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#price">
                    PRICING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    CONTACT US
                  </a>
                </li>
                <div className="User_option">
                  <a href="login.html">Sign In</a>
                  <a href="signup.html">Sign Up</a>
                </div>
              </ul>
            </nav>
          </div>
        </header>
        <section id="home" className="slider_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-1">
                <div className="detail-box">
                  <h1>
                    <span> Modern</span> <br />
                    Apartment <br />
                    House
                  </h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of
                  </p>
                  <div className="btn-box">
                    <a href="" className="">
                      {" "}
                      Read More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
