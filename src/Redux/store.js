import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';
import rocketReducer from './rocketsSlice';
import dragonReducer from './dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
		dragons: dragonReducer,
  },
});

export default store;
