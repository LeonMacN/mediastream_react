import React from "react";

export const Review = props => {
  return (
    <a href="#" className="list-group-item">
      <h4 className="list-group-item-heading">{props.review.author}</h4>
      <p className="list-group-item-text">{props.review.content}</p>
    </a>    
  );
};
