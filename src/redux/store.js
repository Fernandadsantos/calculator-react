import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./calculateSlice";

export default configureStore({
    reducer:{ 
        calculate: calculateReducer,
    },
});