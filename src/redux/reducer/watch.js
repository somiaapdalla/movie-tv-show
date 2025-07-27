// src/redux/watchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
  name: "watch",
  initialState: {
    watchitem: [],
  },
  reducers: {
    addToWatch: (state, action) => {
      state.watchitem.push(action.payload);
    },
    removeFromWatch: (state, action) => {
        const removeFromWatch = action.payload
        state.watchitem = state.watchitem.filter((_,index)=> index != removeFromWatch)
    }
  },
});

export const { addToWatch, removeFromWatch } = watchSlice.actions;
export default watchSlice.reducer;
