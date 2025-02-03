import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "main",
    initialState: {},
    reducers: {}
})

export const { increment, decrement, incrementByAmount } = mainSlice.actions;

export default mainSlice.reducer;