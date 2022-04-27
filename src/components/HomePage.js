import { useRef } from 'react';
import { useNavigate  } from "react-router-dom";
import { searchWord } from '../store/search-actions';
import { useDispatch } from 'react-redux';
import { FaSistrix } from 'react-icons/fa'
import Title from './Title';
import { StyledHomePage } from './styles/HomePage.styled'

const HomePage = () => {
  const dispatch = useDispatch();
  const todoTextInputRef = useRef(null);
  const navigate = useNavigate();

  const searchHandler = (event) => {
    event.preventDefault();
    const enteredWord = todoTextInputRef.current.value;  
    dispatch(searchWord(enteredWord));
    navigate('/result-page');
  };

    return (
        <StyledHomePage onSubmit={searchHandler}>
          <Title/>
          <div>
            <button><FaSistrix/></button>
            <input type='text' name="search" placeholder='search the word' ref={todoTextInputRef}/>
          </div>
        </StyledHomePage>
    )
}

export default HomePage;