import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <div className="leftsideNavbar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETrLsNTaS_kq--xgmUac74k8xkmtlfCw1Hg&usqp=CAU"
            className="imgtopIcone"
            alt="/"
          />
          <Link to="/" className="wehit fs-3 par ">Hushki Movie</Link>
        </div>

        <form className="form-inline">
        <Link to="/favorite" className=" fs-3 par ">My Favorite</Link>
        </form>
      </nav>
    </div>
  );
};



export default Navbar;
