import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import movies from "./reducers/moviesReducer";
import { routerReducer } from 'react-router-redux'

export default createStore(
  combineReducers({
    movies,
    routing: routerReducer
  }),
  {},
  applyMiddleware(logger(), thunk, promise())
);
