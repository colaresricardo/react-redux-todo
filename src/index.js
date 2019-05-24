import React from "react";

import { Provider } from "react-redux";

import store from "./store";
import TodoFit from "./TodoFit";

const App = () => (
  <Provider store={store}>
    <TodoFit />
  </Provider>
);

export default App;
