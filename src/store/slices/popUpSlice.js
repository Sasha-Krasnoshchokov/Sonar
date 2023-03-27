/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  title: '',
};

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    set: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.title = action.payload.title;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = popUpSlice.actions;

export default popUpSlice.reducer;
