import { useEffect } from "react";
import { getLocation, setShouldShowLocationModal } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const LocationSidebar = () => {
  const dispatch = useDispatch();

  const location = useSelector((state) => state.data.location);

  useEffect(() => {
    if (!location.coords) {
      dispatch(getLocation());
    } else {
      console.log(location);
    }
  }, [location, dispatch]);

  return (
    <div className="fixed z-50 right-0 top-0 h-screen sm:w-3/6 w-full bg-white shadow-lg">
      <div className="w-full h-10 relative my-2">
        <button
          className="absolute top-0 right-0 px-4 py-3"
          onClick={() => dispatch(setShouldShowLocationModal(false))}
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
    </div>
  );
};

export default LocationSidebar;
