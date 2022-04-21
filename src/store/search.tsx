import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/'
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    wordInfo: '',
    notification: {
      status: '',
      title: '',
      message: '',
    },
  },
  reducers: {
    getWordSuccess(state, action) {
      state.wordInfo = action.payload.wordInfo;
    },
    getWordFail(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    }
  },
});

export const searchWord = (wordInfoJson: string) => {
  console.log('fired dispatch')
  return async (dispatch: any) => {

    const fetchData = async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInfoJson}`
      );

      if (!response.ok) {
        throw new Error('Could not fetch word data!');
      }

      const data = await response.json();

      return data;
    };
    
    try {
      console.log(`fired try and catch method`);
      const wordData = await fetchData();
      dispatch(
        searchSlice.actions.getWordSuccess({
          wordInfo: wordData
        })
      );
    } catch (error) {
      dispatch(
        searchSlice.actions.getWordFail({
          status: 'error',
          title: 'Error!',
          message: 'sorry. Word not found...',
        })
      );
    }
  };
};

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;