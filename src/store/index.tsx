import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './search';


const store = configureStore({
  reducer: { auth: searchReducer },
});

export default store;