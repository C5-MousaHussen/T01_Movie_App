import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <div className="leftsideNavbar">
           
          <img
            src="https://previews.123rf.com/images/fokaspokas/fokaspokas1803/fokaspokas180300443/96962933-tv-with-movie-strip-white-icon-with-shadow-on-transparent-background.jpg"
            className="imgtopIcone"
            alt="/"
          />
          <a className="navbar-brand">Navbar</a>
        </div>

        <form className="form-inline">
          <p className="btn btn-outline-success my-2 my-sm-0">Search</p>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
