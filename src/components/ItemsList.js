import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/fetchData";
import { Item } from "./Item";
import { searchData } from "../actions/fetchData";

export const ItemsList = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.DataList);
  const dataType = useSelector((state) => state.DataType);
  const searchList = useSelector((state) => state.SearchList);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(10);
  const [moviesContent, setMoviesContent] = useState([]);
  const [showsContent, setShowsContent] = useState([]);

  useEffect(() => {
    setMoviesContent([]);
    setShowsContent([]);
    setIndex(0);
    setPage(1);
    setRange(10);
  }, [dataType]);

  useEffect(() => {
    dispatch(getData(dataType, page));
  }, [dataType, page]);

  const checkAndSet = (content, type) => {
    if (dataList.data.results !== undefined) {
      let exist = false;
      let arrayToFill = [];
      dataList.data.results.slice(index, range).forEach((element) => {
        if (content.indexOf(element) !== -1) {
          exist = true;
        } else if (content.indexOf(element) === -1) {
          arrayToFill.push(element);
        }
      });

      if (!exist) {
        if (type === "movie") {
          if (index === 0 && page === 1) {
            setMoviesContent(arrayToFill);
          } else {
            setMoviesContent((prevState) => [...prevState, ...arrayToFill]);
          }
        } else if (type === "tv") {
          if (index === 0 && page === 1) {
            setShowsContent(arrayToFill);
          } else {
            setShowsContent((prevState) => [...prevState, ...arrayToFill]);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (dataType === "movie") {
      checkAndSet(moviesContent, "movie");
    } else if (dataType === "tv") {
      checkAndSet(showsContent, "tv");
    }
  }, [dataList.data.results, index]);

  const displayData = () => {
    if (dataList.loading) {
      return (
        <div className="loading">
          <h2>Loading...</h2>
          <div className="loading__loader"></div>
        </div>
      );
    }

    let finalContent = {};
    if (searchList.data.results && searchList.query.length > 2) {
      searchList.data.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });

      finalContent = searchList.data.results;
    } else if (
      moviesContent !== undefined &&
      dataType === "movie" &&
      searchList.query.length <= 2
    ) {
      finalContent = {};
      finalContent = moviesContent;
    } else if (
      showsContent !== undefined &&
      dataType === "tv" &&
      searchList.query.length <= 2
    ) {
      finalContent = {};
      finalContent = showsContent;
    }

    return (
      <div className="items_list">
        {finalContent.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    );
  };

  return (
    <section className="items_section">
      {displayData()}
      <button
        className="items_load_cta"
        onClick={() => {
          let contentLength = 0;
          if (dataType === "movie") {
            contentLength = moviesContent.length;
          } else if (dataType === "tv") {
            contentLength = showsContent.length;
          }

          if (contentLength % 20 === 0) {
            setPage(page + 1);
            setIndex(0);
            setRange(10);
          } else {
            setIndex(index + 10);
            setRange(range + 10);
          }
        }}
      >
        Load more
      </button>
    </section>
  );
};
