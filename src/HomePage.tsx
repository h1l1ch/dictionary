// React
import { useRef } from 'react';
// React Router
import { useNavigate  } from "react-router-dom";
// Redux
import { searchWord } from './store/search';
import { useDispatch } from 'react-redux';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const searchHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    console.log('fired search handler')
    
    const enteredWord = todoTextInputRef.current!.value;
    
    if (enteredWord.trim().length === 0) {
      // throw an error
      console.log(`input field cannot be empty`)
      return;
    };
    
    dispatch(searchWord(enteredWord));
    navigate('/result-page');
  };


    return (
        <form onSubmit={searchHandler}>
          <div >
            <label htmlFor='text'>search the word</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
          </div>
            <button>Search</button>
        </form>
    )
}

export default HomePage;