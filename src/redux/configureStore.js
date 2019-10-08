import { createStore, applyMiddleware, compose } from "redux";
import rooReducer from "./reducers";
import reduxInmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rooReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxInmutableStateInvariant()))
  );
}
