import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

import Searcher from "../Search/index";

const Movie = () => {
  

  //number of Page
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState([]);

  let { movieId } = useParams();

  const getAllMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=${page}`
      )
      .then((result) => {
        setMovies([...movies, ...result.data.results]);
        console.log(result);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getAllMovie();
  }, [page]);

  return (
    <div className="contanierMovies">
      <div className="bodyMovie">
        <h1> Popular Movies</h1>
        <div className="items">
          {movies ? (
            movies.map((element, index) => {
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

        <div className="footerLoad">
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className="butload"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
