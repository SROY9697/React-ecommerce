import axios from "axios";
import { toast } from "react-toastify";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
    toast.error("Failed to fetch products!");
  }
};

export const addProduct = (product) => (dispatch) => {
  dispatch({
    type: "ADD_PRODUCT",
    payload: product,
  });
  toast.success("Product added successfully!");
};

export const editProduct = (product) => (dispatch) => {
  dispatch({
    type: "EDIT_PRODUCT",
    payload: product,
  });
  toast.success("Product updated successfully!");
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_PRODUCT",
    payload: id,
  });
  toast.success("Product deleted successfully!");
};


