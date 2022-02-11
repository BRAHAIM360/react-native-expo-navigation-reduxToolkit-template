import testReduxSlice from "./store/testRedux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import todos from "./store/todoExample";

const reducer = combineReducers({
  todos,
  testReduxSlice,
});

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
