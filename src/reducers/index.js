import { combineReducers } from "redux";

import treeReducer from "./treeReducer";
import appleReducer from "./appleReducer";

const rootReducer = combineReducers({
  treeState: treeReducer,
  appleState: appleReducer
})

export default rootReducer
