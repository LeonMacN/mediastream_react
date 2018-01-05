import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import { App } from "./containers/App";
import Movies from "./containers/Movies";
import MovieDetail from "./containers/MovieDetail";
import store from "./store";

import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Movies} />
        <Route path="movieDetail/:id" component={MovieDetail} />
      </Route>
    </Router>
  </Provider>,
  window.document.getElementById("app")
);
