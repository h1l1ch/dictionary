import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    wordInfo: {
      word: '',
      phoneticsArray: [],
      meaningsArray: [],
    },
    notification: {
      message: ''
    },
  },
  reducers: {
    getWordSuccess(state, action) {
      state.wordInfo = action.payload.wordInfo;
    },
    getWordFail(state, action) {
      state.notification = {
        message: action.payload.message
      };
    },
    cleanState(state) {
      state.wordInfo = {
        word: '',
        phoneticsArray: [],
        meaningsArray: [],
      };
      state.notification = {
        message: ''
      }
    }
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;