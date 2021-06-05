import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  //all the keys that we provide to this object are the keys that represent the state object
  auth: authReducer,
});
