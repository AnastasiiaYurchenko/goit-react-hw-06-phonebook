import { createSlice } from '@reduxjs/toolkit';

const filerInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filerInitialState,
  reducers: {
    setFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
