import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  //since we are sending some information, we need to make a post request
  const res = await axios.post("/api/stripe", token); //the name of these routes doesnt make a tremendous difference

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};
