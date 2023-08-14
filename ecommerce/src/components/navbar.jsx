import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShouldShowCart } from "../redux/actions";
import SearchResult from "./searchResult";

const Navbar = () => {
  const [searchText, set_searchText] = useState("");

  const dispatch = useDispatch();
  const shouldShowCart = useSelector((state) => state.data.shouldShowCart);

  const handleCartHover = (e) => {
    e.stopPropagation();
    shouldShowCart
      ? dispatch(setShouldShowCart(false))
      : dispatch(setShouldShowCart(true));
  };

  return (
    <div className="sticky top-0 z-40 h-20 w-full bg-zinc-200/[.5] flex gap-3 justify-between items-center">
      {/* search bar */}
      <div className="w-3/6 relative mx-2">
        <input
          className="relative w-full h-12 rounded-xl pl-8 pr-2"
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        ></input>
        <button className="absolute left-0 top-4 px-2">
          <svg
            class="w-4 h-4 text-teal-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm11.707 2.793-4-4a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414Z" />
          </svg>
        </button>

        <button
          className={searchText ? "absolute top-4 right-0 px-2" : "hidden"}
          onClick={() => set_searchText("")}
        >
          <svg
            class="w-3 h-3 text-teal-600 "
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
          </svg>{" "}
        </button>

        {searchText ? <SearchResult searchText={searchText} /> : null}
      </div>

      <div className="flex gap-4 mx-2">
        <button className="p-2 cursor-pointer">
          <svg
            class="w-6 h-6 text-teal-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 18"
          >
            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </button>
        <button className="p-2 cursor-pointer">
          <svg
            class="w-6 h-6 text-teal-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
        </button>

        {/* cart button */}
        <button
          className="p-2 cursor-pointer"
          onClick={(e) => handleCartHover(e)}
        >
          <svg
            class="w-6 h-6 text-teal-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
