import axios from "axios";

export const getData =
  (type = "movie", page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: "DATA_LOADING" });
      const results = await axios.get(
        `https://api.themoviedb.org/3/${type}/top_rated?api_key=f3e3f5a585f49807aa021686153ceaf6&language=en-US&page=${page}`
      );

      dispatch({ type: "DATA_SUCCESS", payload: results.data });
    } catch (e) {
      dispatch({ type: "DATA_FAILED" });
    }
  };

export const searchData =
  (query, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: "SEARCH_DATA_LOADING" });

      const results = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=f3e3f5a585f49807aa021686153ceaf6&language=en-US&query=${query}&page=${page}&include_adult=false`
      );

      dispatch({
        type: "SEARCH_DATA_SUCCESS",
        payload: results.data,
        query: query,
      });
    } catch (e) {
      dispatch({ type: "SEARCH_DATA_FAILED" });
    }
  };
