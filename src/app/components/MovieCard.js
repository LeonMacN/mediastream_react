import React from "react";
import { browserHistory } from "react-router";

export const MovieCard = props => {
  const imgURL = "http://image.tmdb.org/t/p/w185" + props.movie.poster_path;
  const details = "/movieDetail/"+props.movie.id;
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
          </p>
        </div>
      </div>
    </div>
  );
};
