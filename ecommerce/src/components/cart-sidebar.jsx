import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  removeItemFromCart,
  setShouldShowCart,
  updateItemQuantity,
} from "../redux/actions";
import { useEffect, useState } from "react";

const CartSidebar = () => {
  const [cartPrices, set_cartPrices] = useState([]);
  const [totalPrice, set_totalPrice] = useState(0);
  const [deliveryCharge, set_deliveryCharge] = useState(120);

  const cartItems = useSelector((state) => {
    return state.data.cartItems;
  });

  useEffect(() => {
    if (cartItems.length) {
      let prices = [];
      let total = 0;
      cartItems.forEach((item) => {
        prices.push(item.price);
        total += item.price;
      });
      set_cartPrices(prices);
      set_totalPrice(total);
    }
  }, [cartItems]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleUpdateQuantity = (id, quantity, action) => {
    const finalQnt = action === "add" ? quantity + 1 : quantity - 1;

    if (finalQnt === 0) dispatch(removeItemFromCart(id));
    else dispatch(updateItemQuantity(id, finalQnt));
  };

  return (
    <div className="fixed z-50 right-0 top-0 h-screen sm:w-3/6 w-full bg-white shadow-lg">
      <div className="w-full h-10 relative my-2">
        <button
          className="absolute top-0 right-0 px-4 py-3"
          onClick={() => dispatch(setShouldShowCart(false))}
        >
          <svg
            class="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <div className="p-3 h-[60vh] overflow-y-auto">
        {cartItems.length
          ? cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex p-2 text-start justify-between"
                >
                  <div className="flex gap-2">
                    <img
                      className="h-24 rounded-3"
                      src={item.strMealThumb}
                      alt="img"
                    />
                    <div className="px-3">
                      <h5>{item.strMeal}</h5>
                      <p className="text-rose-600 mb-0">Rs {item.price}</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <div>
                      <button
                        className="px-3 py-1 rounded-2 bg-zinc-500 mx-1"
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            item.quantity,
                            "subtract"
                          )
                        }
                      >
                        -
                      </button>
                      {item.quantity}{" "}
                      <button
                        className="px-3 py-1 rounded-2 bg-zinc-500 mx-1"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity, "add")
                        }
                      >
                        +
                      </button>{" "}
                    </div>
                    <button
                      className="bg-rose-500 mt-3 py-2 px-4 rounded-2"
                      onClick={() => dispatch(removeItemFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className="sm:w-full w-3/6 mt-2 p-2 shadow-2xl shadow-zinc-500">
        <div className="w-full p-2">
          <div className="flex justify-between p-2 text-xl">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between p-2 text-xl">
            <span>Total Amount</span>
            <span>Rs {totalPrice}</span>
          </div>
          <div className="flex justify-between p-2 text-xl">
            <span>Delivery Charge</span>
            <span>Rs {deliveryCharge}</span>
          </div>

          <div className="flex justify-between p-2 text-xl">
            <span>Discount</span>
            <span>5%</span>
          </div>
          <div className="flex justify-between p-2 text-xl">
            <span>Total</span>
            <span>Rs {deliveryCharge + totalPrice}</span>
          </div>
        </div>

        <button className="bg-rose-500 py-2 px-4 mb-1 rounded-2 w-full text-xl">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
