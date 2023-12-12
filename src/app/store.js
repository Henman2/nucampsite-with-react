import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { campsitesReducer } from '../features/campsite/campSitesSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    campsites: campsitesReducer
  },
});
