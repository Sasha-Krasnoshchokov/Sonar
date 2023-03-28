import { configureStore } from '@reduxjs/toolkit';

import popUpReduce from './slices/popUpSlice';
import userReduce from './slices/userSlice';

const store = configureStore({
  reducer: {
    popUpConfig: popUpReduce,
    user: userReduce,
  },
});

export default store;
