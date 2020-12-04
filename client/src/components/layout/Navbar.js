import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css"


class Navbar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar">
        <nav className="z-depth-0">
          <div className="top-bar nav-wrapper">
            <div className="top-bar-title">
              <img className="image" src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                alt="paw prints" />
            </div>
            <div className="top-bar-right">
              <ul className="menu menu-hover-lines">
                <li><img
                  className="image"
                  src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                  alt="paw prints" /></li>
                <li><Link to="/register">
                  <a href="#">Sign Up</a>
                </Link>
                </li>
                <li><Link to="/login">
                  <a href="#">Sign In</a>
                </Link>
                </li>
                <li><img
                  className="image"
                  src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                  alt="paw prints" /></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      // <div className="navbar-fixed">
      //   <nav className="z-depth-0">
      //     <div className="nav-wrapper white">
      //       <Link to="/" style={{ fontFamily: "monospace" }}
      //         className="col s5 brand-logo center black-text" >
      //         <i className="material-icons">code</i>
      //         PAW-PRINTS
      //       </Link>


      //     </div>
      //   </nav>
      // </div>
    );
  }
}
export default Navbar;
/*
            <div>
        <h1>Navbar Paw - Prints</h1>
        <Link to="/" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} >
          Log in
        </Link>



        <Link to="/signup" className={window.location.pathname === "/signup" || window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Sign up
        </Link>

      </div>

            */