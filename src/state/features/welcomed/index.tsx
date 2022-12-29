import { createSlice } from "@reduxjs/toolkit";
interface WelcomedState {
  welcomed: boolean;
}

const initialState: WelcomedState = {
  welcomed: false,
};

const welcomedSlice = createSlice({
  name: "welcomed",
  initialState,
  reducers: {
    toggleWelcomed(state) {
      state.welcomed = !state.welcomed;
    },
  },
});

export const { toggleWelcomed } = welcomedSlice.actions;
export default welcomedSlice.reducer;
