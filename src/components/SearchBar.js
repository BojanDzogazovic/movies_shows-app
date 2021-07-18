import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../actions/fetchData";
import debounce from "lodash.debounce";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.SearchList);
  const [page, setPage] = useState(1);

  const changeHandler = (e) => {
    if (e.target.value.length > 1) {
      dispatch(searchData(e.target.value.toLowerCase(), page));
    }
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies/TV shows..."
        className="search-bar__input"
        onChange={debouncedChangeHandler}
      />
    </div>
  );
};
