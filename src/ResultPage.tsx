// React
import { Fragment } from 'react'
// React Router
import { NavLink } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from './store/search';

const ResultPage: React.FC = () => {
    const dispatch = useDispatch();
    const wordInfo = useSelector((state: any) => state.search.wordInfo);
    const error = useSelector((state: any) => state.search.notification);

    const cleanStateHandler = () => {
        dispatch(searchActions.cleanState());
    };

    return (
        <Fragment>
            <h1>dictionary</h1>
            {wordInfo && (
                <Fragment>
                    <h3>word:</h3>
                    <p>hello</p>
                    <h3>phonetic:</h3>
                    <p>həˈləʊ</p>
                    <h3>audio:</h3>
                    <button>mp3: hello</button>
                    <h3>origin:</h3>
                    <p>early 19th century: variant of earlier hollo ; related to holla.</p>
                    <h3>exclamation:</h3>
                    <p>definition: used as a greeting or to begin a phone conversation.</p>
                    <p>example: hello there, Katie!</p>
                    <h3>noun:</h3>
                    <p>definition: an utterance of ‘hello’; a greeting.</p>
                    <p>example: she was getting polite nods and hellos from people</p>
                    <h3>verb:</h3>
                    <p>definition: say or shout ‘hello’.</p>
                    <p>example: I pressed the phone button and helloed</p>
                </Fragment>
            )}
            {error.status && (
                <Fragment>
                    <h2>sorry. Word not found...</h2>
                </Fragment>
            )}
            {/* <h1>dictionary</h1>
            <h3>word:</h3>
            <p>hello</p>
            <h3>phonetic:</h3>
            <p>həˈləʊ</p>
            <h3>audio:</h3>
            <button>mp3: hello</button>
            <h3>origin:</h3>
            <p>early 19th century: variant of earlier hollo ; related to holla.</p>
            <h3>exclamation:</h3>
            <p>definition: used as a greeting or to begin a phone conversation.</p>
            <p>example: hello there, Katie!</p>
            <h3>noun:</h3>
            <p>definition: an utterance of ‘hello’; a greeting.</p>
            <p>example: she was getting polite nods and hellos from people</p>
            <h3>verb:</h3>
            <p>definition: say or shout ‘hello’.</p>
            <p>example: I pressed the phone button and helloed</p> */}
            <NavLink to="/home-page">
                <button onClick={cleanStateHandler}>try another word</button>
            </NavLink>
        </Fragment>
    )
}

export default ResultPage;