import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';
import rocketReducer from './rocketsSlice';
import dragonReducer,{fetchDragons} from './dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
		dragons: dragonReducer,
  },
});

store.dispatch(fetchDragons());
export default store;
