import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { campsitesReducer } from '../features/campsite/campSitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {  //imported reducers to the object stored in the reducer property
    // counter: counterReducer,
    campsites: campsitesReducer,
    comments:  commentsReducer,
    partners:  partnersReducer,
    promotions: promotionsReducer

  }
});

console.log(store.getState());