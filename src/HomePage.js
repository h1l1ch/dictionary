// React
import { useRef } from 'react';
// React Router
import { useNavigate  } from "react-router-dom";
// Redux
import { searchWord } from './store/search';
import { useDispatch } from 'react-redux';
// React Icons
import { FaSistrix } from 'react-icons/fa'
// Elements
import Title from './Title';

const HomePage = () => {
  const dispatch = useDispatch();
  const todoTextInputRef = useRef(null);
  const navigate = useNavigate();

  const searchHandler = (event) => {
    event.preventDefault();
    
    console.log('fired search handler')
    
    const enteredWord = todoTextInputRef.current.value;
    
    if (enteredWord.trim().length === 0) {
      // throw an error
      console.log(`input field cannot be empty`)
      return;
    };
    
    dispatch(searchWord(enteredWord));
    navigate('/result-page');
  };


    return (
        <form onSubmit={searchHandler} className="home-page">
          <Title/>
          <div>
            <label htmlFor='text'>search the word</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button><FaSistrix/></button>
          </div>
        </form>
    )
}

export default HomePage;