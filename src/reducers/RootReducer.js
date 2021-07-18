import { combineReducers } from "redux";
import { DataReducer } from "./DataReducer";
import { SearchReducer } from "./SearchReducer";
import { DataTypeReducer } from "./DataTypeReducer";

const RootReducer = combineReducers({
  DataList: DataReducer,
  SearchList: SearchReducer,
  DataType: DataTypeReducer,
});

export default RootReducer;
