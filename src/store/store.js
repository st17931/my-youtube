import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice.js"

export const store = configureStore({
    reducer: {
        sidebarToggler:appReducer
    }
})