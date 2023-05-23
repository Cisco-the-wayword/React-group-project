import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/';
const endPoint = 'rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(`${url}${endPoint}`);
  const rockets = await response.json();
  return rockets;
});

const initialState = {
  rocketList: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reservation: (state, action) => {
      const rocketId = action.payload;
      state.rocketList = state.rocketList.map((rocket) =>
        rocket.id === rocketId
          ? { ...rocket, reserved: !rocket.reserved }
          : rocket
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.rocketList = [];
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        const rockets = action.payload.map((rocket) => {
          const { id, name, type, description, flickr_images } = rocket;
          return { id, name, type, description, flickr_images };
        });
        state.rocketList = rockets;
      });
  },  
});

export const { reservation } = rocketSlice.actions;

export default rocketSlice.reducer;

export const getNeededRockets = () => async (dispatch, getState) => {
  const { rocketList } = getState().rockets;

  if (rocketList.length === 0) {
    await dispatch(getRockets());
  }
};
