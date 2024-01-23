import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToggle : true
};

export const appSlice = createSlice({
    name:"sidebarToggler",
    initialState,
    reducers:{
        handleToggle: (state)=>{
            state.isToggle = !state.isToggle;
        }
    }
})

export const { handleToggle } = appSlice.actions;
export default appSlice.reducer;