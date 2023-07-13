import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/dataSlice";

const store = configureStore({ reducer: { data: dataSlice.reducer } });

export default store;
