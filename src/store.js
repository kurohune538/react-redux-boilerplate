import { compose, createStore, applyMiddleware } from "redux";
// middlewares
//
import rootReducer from "./reducers";

export default initialState => {
  // middleware
  const enhancer = compose(applyMiddleware());
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      // eslint-disable-next-line global-require
      const nextReducer = require("./reducers").default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
