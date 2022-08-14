import { FoodProd } from "./ActionType";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FoodProd.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FoodProd.SELECTED_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
