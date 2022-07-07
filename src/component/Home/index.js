import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

import Movie from "../Movie";

const Home = () => {
  //isSearch
  const [isSearch, setIsSearch] = useState(false);

  const [movieSearch, setMovieSearch] = useState("");
  const [uri, setUri] = useState("");

  const searchBox = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US&query=${uri}&page=1&include_adult=false`
      )
      .then((result) => {
        setMovieSearch(result.data.results);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    searchBox();
  }, [uri]);

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
          onChange={(e) => {
            setUri(e.target.value);
            if (e.target.value.length > 0) {
              setIsSearch(true);
            } else {
              setIsSearch(false);
            }
          }}
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
      <div className="Movies" style={{ display: !isSearch ? "block" : "none" }}>
        <Movie />
      </div>
      <div
        className="contanierSearch"
        style={{ display: isSearch ? "block" : "none" }}
      >
        <div className="contanierMovies">
          <div className="bodyMovie ">
            <h1>Search Result</h1>
            <div className="items">
              {movieSearch ? (
                movieSearch.map((element, index) => {
                  return (
                    <div className="pMovie" key={index}>
                      <a href={`/movie/${element.id}`}>
                        <img
                          className="mosa"
                          src={`http://image.tmdb.org/t/p/w500/${element.poster_path}`}
                          key={element.id}
                        />
                      </a>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
