import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "./reducers/ageSlice";

const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;
