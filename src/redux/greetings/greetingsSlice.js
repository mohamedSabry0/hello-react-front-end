import { createSlice } from '@reduxjs/toolkit';
import fetchGreetings from './greetingsThunk';

const initialState = {
  greetings: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  message: null,
};

const isPendingAction = (action) => action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.endsWith('/rejected');

const greetingsSlice = createSlice({
  name: 'Greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        greetings: [action.payload.greeting],
        status: 'succeeded',
      }))

    // for all pending actions that has the same callback functions
      .addMatcher(isPendingAction, (state) => ({ ...state, status: 'loading' }))

    // for all rejected actions that has the similar callback functions
      .addMatcher(isRejectedAction, (state, action) => ({
        ...state,
        error: action.error.message,
        status: 'failed',
      }));
  },
});

export const greetingsState = (state) => state.greetings;
export { fetchGreetings };
export default greetingsSlice.reducer;
