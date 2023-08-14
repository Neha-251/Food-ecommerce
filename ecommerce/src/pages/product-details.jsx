import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  getSelectedProductDetails,
  removeItemFromCart,
  updateItemQuantity,
} from "../redux/actions";
import { checkIsItemInCart, getRandomPrice } from "../helper";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [addCartText, set_addCartText] = useState("Add to Cart");
  const { id } = useParams();

  const price = getRandomPrice();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedProductDetails(id));
  }, [id]);

  const {
    strMealThumb,
    strCategory,
    strMeal,
    strArea,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = useSelector((state) => state.data.selectedProductDetails);
  const cartItems = useSelector((state) => state.data.cartItems);

  const handleAddToCart = () => {
    // NOTE: if item is in cart remove it  else add to cart
    const isItemInCart = checkIsItemInCart(id, cartItems);

    if (isItemInCart) {
      dispatch(removeItemFromCart(id));
      setQuantity(1);
      set_addCartText("Add to Cart");
    } else {
      dispatch(addToCart(id, quantity, price, strMeal, strMealThumb));
      set_addCartText("Added to Cart");
    }
  };

  const isItemInCart = useSelector((state) => {
    return state.data.isItemInCart;
  });

  const handleRemoveCartItem = () => {
    dispatch(removeItemFromCart(id));
  };

  useEffect(() => {
    if (quantity === 0) handleRemoveCartItem();
    else {
      const isItemInCart = checkIsItemInCart(id, cartItems);

      if (isItemInCart) {
        // update item quantity
        dispatch(updateItemQuantity(id, quantity));
      }
    }
  }, [quantity]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row width-full m-5">
        <div>
          <img className=" rounded-2" src={strMealThumb} alt="img" />
        </div>
        <div className="py-5 text-start ">
          <div>
            <h2 className="mb-4">{strMeal}</h2>
            <h3 className="mb-4 text-rose-600">{price} Rs</h3>
            <p>
              Category: {strCategory} ({strArea})
            </p>
            <p>
              contains: {strIngredient1}, {strIngredient2}, {strIngredient3},
              {strIngredient4}, {strIngredient5}, {strIngredient6},
              {strIngredient7}, {strIngredient8}, {strIngredient9},
              {strIngredient10}
            </p>
          </div>
          <div>
            Quantity:{" "}
            <button
              className="px-3 py-1 rounded-2 bg-zinc-500 mx-1"
              onClick={() => quantity > 0 && setQuantity(quantity - 1)}
            >
              -
            </button>
            {quantity}{" "}
            <button
              className="px-3 py-1 rounded-2 bg-zinc-500 mx-1"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>{" "}
          </div>
          <div className="flex mt-4 gap-3">
            <button
              className="bg-rose-500 py-2 px-4 rounded-2"
              onClick={handleAddToCart}
            >
              {addCartText}
            </button>
            <button className="bg-zinc-500 py-2 px-4 rounded-2">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
