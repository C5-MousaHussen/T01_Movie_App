import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  let { movieId } = useParams();

  const getAllMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        setMovies(result.data.results);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getAllMovie();
  }, []);

  return (
    <div className="contanierMovies">
      <div className="bodyMovie">
        <h1> Popular Movies</h1>
        <div className="items">
        {movies
          ? movies.map((element, index) => {
              //console.log(element.id);
              return (
                <div className="pMovie" key={index}>
                  <a href={element.id}><img 
                    className="mosa"
                    src={`http://image.tmdb.org/t/p/w500/${element.poster_path}`}
                    key={element.id}
                  /></a>
                  
                </div>
              );
            })
          : []}
          </div>
      </div>
    </div>
  );
};

export default Movie;
