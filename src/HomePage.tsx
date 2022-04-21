// React
import { useRef } from 'react';
// React Router
import { NavLink } from "react-router-dom";
// Redux
import { searchWord } from './store/search';

const HomePage: React.FC = () => {
  
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const searchHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredWord = todoTextInputRef.current!.value;

    if (enteredWord.trim().length === 0) {
      // throw an error
      return;
    };

    searchWord(enteredWord);
  };


    return (
        <form onSubmit={searchHandler}>
          <div >
            <label htmlFor='text'>search the word</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
          </div>
          <NavLink to="/result-page">
            <button>Login</button>
          </NavLink>
        </form>
    )
}

export default HomePage;