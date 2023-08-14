import axios from "axios";
import {
  CART_ITEMS,
  IS_LOADING,
  SEARCH_RESULTS,
  SELECTED_PRODUCT_DETAILS,
  SHOULD_SHOW_CART,
} from "./constants";

export const setIsLoading = (payload) => {
  return {
    type: IS_LOADING,
    payload: payload,
  };
};

export const setCartItems = (payload) => {
  return {
    type: CART_ITEMS,
    payload: payload,
  };
};

export const setShouldShowCart = (payload) => {
  return {
    type: SHOULD_SHOW_CART,
    payload: payload,
  };
};

export const setSearchResults = (payload) => {
  return {
    type: SEARCH_RESULTS,
    payload: payload,
  };
};

export const setSelectedProductDetails = (payload) => {
  return {
    type: SELECTED_PRODUCT_DETAILS,
    payload: payload,
  };
};

export const getSearchResults = (searchStr) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`)
    .then((res) => {
      return dispatch(setSearchResults(res.data.meals));
    })
    .catch((err) => console.log(err));
};

export const getSelectedProductDetails = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      return dispatch(setSelectedProductDetails(res.data.meals[0]));
    })
    .catch((err) => console.log(err));
};

export const addToCart =
  (id, quantity, price, strMeal, strMealThumb) => (dispatch) => {
    dispatch(setIsLoading(true));

    const foodCartItems = localStorage.getItem("foodCartItems");

    if (!foodCartItems) {
      localStorage.setItem(
        "foodCartItems",
        JSON.stringify([{ id, quantity, price, strMeal, strMealThumb }])
      );
      dispatch(setCartItems([{ id, quantity, price, strMeal, strMealThumb }]));
    } else {
      const _items = JSON.parse(foodCartItems);

      const updatedItems = [
        ..._items,
        { id, quantity, price, strMeal, strMealThumb },
      ];
      localStorage.setItem("foodCartItems", JSON.stringify(updatedItems));
      dispatch(setCartItems(updatedItems));
    }

    dispatch(setIsLoading(false));
  };

export const removeItemFromCart = (id) => (dispatch) => {
  const foodCartItems = localStorage.getItem("foodCartItems");

  if (!foodCartItems) return;

  dispatch(setIsLoading(true));

  const items = JSON.parse(foodCartItems);

  const newItems = items.filter((item) => item.id !== id);

  localStorage.setItem("foodCartItems", JSON.stringify(newItems));
  dispatch(setCartItems(newItems));
};

export const updateItemQuantity = (id, quantity) => (dispatch) => {
  const foodCartItems = localStorage.getItem("foodCartItems");

  if (!foodCartItems) return;

  dispatch(setIsLoading(true));
  const items = JSON.parse(foodCartItems);

  items.forEach((item) => {
    if (item.id === id) item.quantity = quantity;
  });

  localStorage.setItem("foodCartItems", JSON.stringify(items));
  dispatch(setCartItems(items));
};

export const getCartItems = () => (dispatch) => {
  dispatch(setIsLoading(true));

  const foodCartItems = localStorage.getItem("foodCartItems");

  if (foodCartItems) {
    dispatch(setCartItems(JSON.parse(foodCartItems)));
  } else dispatch(setCartItems([]));
};
