import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../redux/actions";
import { debounce } from "lodash";
import { Link } from "react-router-dom";

const SearchResult = ({ searchText }) => {
  const dispatch = useDispatch();

  const getDebouncedResults = useCallback(
    debounce((str) => {
      if (str) dispatch(getSearchResults(str));
    }, 500),
    []
  );

  useEffect(() => {
    if (searchText) getDebouncedResults(searchText);
  }, [searchText, getDebouncedResults]);

  const searchResults = useSelector((state) => state.data.searchResults);

  return (
    <div className="absolute p-2 top-12 w-full max-h-80 overflow-y-auto bg-white rounded-xl">
      {searchResults?.length > 0
        ? searchResults.map((result) => {
            return (
              <Link className="no-underline " to={`/product/${result.idMeal}`}>
                {" "}
                <div
                  className="flex justify-between w-full h-12 px-2  items-center text-grey-800"
                  key={result.idMeal}
                >
                  <p className="text-grey-800">{result.strMeal}</p>
                  <img className="h-10" src={result.strMealThumb} alt="img" />
                </div>{" "}
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default SearchResult;
