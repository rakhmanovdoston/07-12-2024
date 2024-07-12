import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postSlice";

export default configureStore({
    reducer:{
       postsReducer
    }
})