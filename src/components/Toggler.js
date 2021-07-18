import React from "react";
import { getMovies, getShows } from "../actions/setDataType";
import { useDispatch, useSelector } from "react-redux";

export const Toggler = () => {
  const dispatch = useDispatch();
  const DataType = useSelector((state) => state.DataType);

  return (
    <div className="toggler">
      <button
        className={`toggler__cta ${
          DataType === "movie" ? "toggler__cta--active" : ""
        }`}
        id="moviesBtn"
        onClick={() => {
          dispatch(getMovies());
        }}
      >
        Top rated movies
      </button>
      <button
        className={`toggler__cta ${
          DataType === "tv" ? "toggler__cta--active" : ""
        }`}
        id="showsBtn"
        onClick={() => {
          dispatch(getShows());
        }}
      >
        Top rated TV shows
      </button>
    </div>
  );
};
