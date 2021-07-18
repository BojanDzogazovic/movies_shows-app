import React from "react";

export const Item = (props) => {
  return (
    <div className="item">
      <img
        className="item__thumbnail"
        src={`https://image.tmdb.org/t/p/w400${props.item.backdrop_path}`}
        alt={props.item.title}
      />
      <p className="item__title">{props.item.title || props.item.name}</p>
      <p className="item__ratings">{props.item.vote_average}</p>
    </div>
  );
};
