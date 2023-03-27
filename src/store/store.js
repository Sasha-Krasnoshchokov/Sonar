import { configureStore } from '@reduxjs/toolkit';

import popUpReduce from './slices/popUpSlice';

const store = configureStore({
  reducer: {
    popUpConfig: popUpReduce,
  },
});

export default store;
