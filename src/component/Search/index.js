import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

const Searcher = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [uri, setUri] = useState("a");

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
    <div className="contanierSearch">
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
  );
};

export default Searcher;
