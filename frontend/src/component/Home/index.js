import React from "react";
import "./style.css";

import Movie from "../Movie"

const Home = () => {
  return (
    <div className="container2">
      <div className="imgbackg">
        <h1 className="marginleft">
          Doctor Strange in the Multiverse of Madness
        </h1>
        <p className="fs-5 marginleft">
          Doctor Strange, with the help of mystical allies both old and new,
          traverses the <br /> mind-bending and dangerous alternate realities of
          the Multiverse to confront a mysterious new adversary.
        </p>
      </div>
      <div className="bottomdown">
        <input
          placeholder="Search .."
          type={"search"}
          className="form-control"
        />
        <button className="btn btn-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 20 20"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <Movie/>
    </div>
  );
};

export default Home;
