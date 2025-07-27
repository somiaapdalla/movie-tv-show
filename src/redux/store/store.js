import { configureStore } from "@reduxjs/toolkit";
import watchslice from "../reducer/watch"

const store = configureStore({
    reducer:{
        watch:watchslice
    }
})
export default store