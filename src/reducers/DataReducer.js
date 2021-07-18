const defaultState = {
  loading: false,
  data: [],
  errorMessage: "",
};

export const DataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DATA_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case "DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: "",
      };
    case "DATA_FAILED":
      return {
        ...state,
        loading: false,
        errorMessage: "Sorry! There was an error!",
      };
    default:
      return state;
  }
};
