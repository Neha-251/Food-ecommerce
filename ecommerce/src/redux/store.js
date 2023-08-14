import { legacy_createStore as createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
// import {rootReducer} from './reducers/index'
import { composeWithDevTools } from "@redux-devtools/extension";

import { combineReducers } from "redux";

import { ProductReducer } from "./reducer";

const rootReducer = combineReducers({
  data: ProductReducer,
});

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
