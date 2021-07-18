const defaultState = {
  loading: false,
  data: [],
  query: "",
  errorMessage: "",
};

export const SearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SEARCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case "SEARCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        query: action.query,
        errorMessage: "",
      };
    case "SEARCH_DATA_FAILED":
      return {
        ...state,
        loading: false,
        errorMessage: "Sorry! There was an error!",
      };
    default:
      return state;
  }
};
