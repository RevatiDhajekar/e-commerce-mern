import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const getProducts = () => (dispatch) => {
  dispatch({ type: ALL_PRODUCT_REQUEST });
  axios
    .get("http://localhost:4000/api/v1/products")
    .then((response) => {
      //handles the resolved promise directly.
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: response.data,
      });
      console.log(response);
    })
    .catch((error) => {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.message,
      });
    });
};

export const getProductDetails = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });
  axios.get(`http://localhost:4000/api/v1/product/${id}`)
  .then((response) => {
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: response.data })
    console.log(response);
  }).catch(
    (error) => {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
  );;
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
