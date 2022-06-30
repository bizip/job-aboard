import { configureStore, combineReducers } from '@reduxjs/toolkit';
import JobReducer from './jobs/Job';

const allReducer = combineReducers({
  JobReducer,
});
const store = configureStore({
  reducer: allReducer,
});
export default store;
