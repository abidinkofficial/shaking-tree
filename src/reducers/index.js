import { combineReducers } from "redux";
import applicationReducer from "./applicationReducer";

const rootReducer = combineReducers({
  applicationState: applicationReducer
})

export default rootReducer
