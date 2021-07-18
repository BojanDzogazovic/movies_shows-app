let defaultState = "movie";

export const DataTypeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MOVIE":
      return (state = action.payload);
    case "TV":
      return (state = action.payload);
    default:
      return state;
  }
};
