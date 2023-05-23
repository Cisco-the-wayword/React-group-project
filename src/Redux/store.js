import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';
import rocketReducer from './rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
