import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import "../layout/footer.css"

import GetAllPosts from "../layout/GetAllPosts";

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    //console.log(user)
    return (
      <div className="hero-section">
        <div style={{ height: "75vh" }} className="container valign-wrapper">

          <div className="grid-x grid-padding-x">
            <div className="medium-12 s12 cell center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into a full-stack{" "}
                  <span style={{ fontFamily: "monospace" }}>PAW PRINT</span> app 👏
                </p>
                <Link to="/upload">Create a post</Link>

              </h4>
              <button style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3" >
                Logout
              </button>
              <div className="medium-12">
                <GetAllPosts />
              </div>
            </div>

          </div>

          {/* 
        The home page for loggen in people will include this page.
        After creating a post, people will be redirected here
         */}

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);