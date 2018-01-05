import React from "react";
import { browserHistory } from "react-router";
import {findIndex } from "lodash";

export const MovieCard = props => {
  const imgURL = "http://image.tmdb.org/t/p/w185" + props.movie.poster_path;
  const details = "/movieDetail/"+props.movie.id;
  let favoriteBtn;
  if (findIndex(props.favorites, o =>{return o === props.movie.id;}) < 0) {
    favoriteBtn = <button className="btn btn-success" onClick={() => props.addToFavorites(props.movie.id)}>
    Add to favorites
  </button>
  }
  return (
    <div className="col-sm-5 col-md-3">
      <div className="thumbnail" style={{ height: 700 + "px" }}>
        <img src={imgURL} alt={props.movie.original_title} />
        <div className="caption">
          <h3>{props.movie.original_title}</h3>
          <p>{props.movie.overview}</p>
          <p>
            <button className="btn btn-primary" onClick={() => browserHistory.push(details)}>
              View reviews
            </button>
            { favoriteBtn }
          </p>
        </div>
      </div>
    </div>
  );
};
