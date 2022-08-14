import axios from "axios";
import { FoodProd } from "./ActionType";

const Products = (prods) => {
  return {
    type: FoodProd.SET_PRODUCTS,
    payload: prods,
  };
};

const SelectedProd = (prod) => {
  return {
    type: FoodProd.SELECTED_PRODUCT,
    payload: prod,
  };
};

export const getProd = () => (dispatch) => {
  try {
    axios.get("http://localhost:8000/foods").then((res) => {
      dispatch(Products(res.data));
    });
  } catch (error) {
    console.log("err", error);
  }
};


export const selectedProd = (code) => (dispatch) => {
  try {
    axios.get(`http://localhost:8000/foods/${code}`).then((res) => {
      dispatch(SelectedProd(res.data));
    });
  } catch (error) {
    console.log("err", error);
  }
};
