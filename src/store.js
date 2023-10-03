import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { trackerReducer } from "./reducers";

export const store = createStore(trackerReducer, applyMiddleware(thunk));
