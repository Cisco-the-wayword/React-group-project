import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const dragonURL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = createAsyncThunk('Dragons/fetchDragons',async () => {
	const response = await fetch(dragonURL);
  const dragons = await response.json();
	const selectedDragon = dragons.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      image: dragon.flickr_images,
			description: dragon.description,
    }));
    return selectedDragon;
});
const initialState = {
  dragons: [],
  isLoading: false,
  error: false,
};

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.dragons = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchDragons.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(fetchDragons.rejected, (state, action) => {
			state.error = action.error.message;
			state.isLoading = false;
		});
  },
});

export default dragonSlice.reducer;