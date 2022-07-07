import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
const Favorite = () => {
  let store = JSON.parse(localStorage.getItem("Fav")) || [];

  const [favorite, setFavorite] = useState([]);
  

  const getFavoriteMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        setFavorite(result.data.results);
      })
      .catch((err) => {
        throw err;
      });
  };

const deleteFav = (element)=>{
 
store =  store.filter((elem,index)=>{
    
    return elem != element
  })
  console.log(store);
  localStorage.setItem("Fav",JSON.stringify(store))
  
}

  useEffect(() => {
    getFavoriteMovie();

  }, []);
console.log(store);
  return (
    
    <div className="contanierFav">
      {store
        ? store.map((element, index) => {
            //console.log(element);
            return (
              <div className="pMovie" key={index}>
              <a href={`/movie/${element.id}`}>
                <img
                  className="mosa"
                  src={`http://image.tmdb.org/t/p/w500/${element.poster_path}`}
                  key={element.id}
                />
              </a>
              <button onClick={()=>{
                deleteFav(element)
                getFavoriteMovie()
              }}>X</button>
            </div>
              
            );
          })
        : []}
        </div>
    
  );
};

export default Favorite;
