import {
  CART_ITEMS,
  IS_LOADING,
  SEARCH_RESULTS,
  SELECTED_PRODUCT_DETAILS,
  SHOULD_SHOW_CART,
} from "./constants";

const initialState = {
  isLoading: false,
  cartItems: [],
  shouldShowCart: false,
  searchResults: [],
  selectedProductDetails: {},
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return { ...state, isLoading: payload };
    case CART_ITEMS:
      return { ...state, cartItems: payload, isLoading: false };
    case SHOULD_SHOW_CART:
      return { ...state, shouldShowCart: payload };
    case SEARCH_RESULTS:
      return { ...state, searchResults: payload, isLoading: false };
    case SELECTED_PRODUCT_DETAILS:
      return { ...state, selectedProductDetails: payload, isLoading: false };
    default:
      return state;
  }
};
