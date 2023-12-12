import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import counterReducer from '../features/counter/counterSlice';
import { campsitesReducer } from '../features/campsite/campSitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
      campsites: campsitesReducer,
      comments: commentsReducer,
      partners: partnersReducer,
      promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());