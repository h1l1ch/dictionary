import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    wordInfo: {
      word: '',
      phonetics: '',
      meanings: '',
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
        phonetics: '',
        meanings: '',
      };
      state.notification = {
        message: ''
      }
    }
  },
});

export const searchWord = (wordInfoJson: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {

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
      const wordData = await fetchData();
      console.log(wordData);
      dispatch(
        searchSlice.actions.getWordSuccess({
          wordInfo: {
            word: wordData[0]["word"] && wordData[0]["word"],
            phonetics: [
              wordData[0]["phonetics"][0] && wordData[0]["phonetics"][0],
              wordData[0]["phonetics"][1] && wordData[0]["phonetics"][1]
            ],
            meanings: [
              wordData[0]["meanings"][0] && wordData[0]["meanings"][0],
              wordData[0]["meanings"][1] && wordData[0]["meanings"][1],
              wordData[0]["meanings"][2] && wordData[0]["meanings"][2],
              wordData[0]["meanings"][3] && wordData[0]["meanings"][3],
              wordData[0]["meanings"][4] && wordData[0]["meanings"][4],
            ],
          }
        })
      );
    } catch (error) {
      console.log(error)
      dispatch(
        searchSlice.actions.getWordFail({
          message: 'sorry. Word not found...'
        })
      );
    }
  };
};

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;