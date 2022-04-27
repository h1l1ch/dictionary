import { searchActions } from './search-slice';
import { AnyAction, Dispatch } from 'redux';

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
        dispatch(
            searchActions.getWordSuccess({
            wordInfo: {
              word: wordData[0]["word"] && wordData[0]["word"],
              phoneticsArray: [
                ...wordData[0]["phonetics"][0] && wordData[0]["phonetics"]
              ],
              meaningsArray: [
                ...wordData[0]["meanings"][0] && wordData[0]["meanings"]
              ],
            }
          })
        );
      } catch (error) {
        console.log(error)
        dispatch(
            searchActions.getWordFail({
            message: 'sorry. Word not found...'
          })
        );
      }
    };
};