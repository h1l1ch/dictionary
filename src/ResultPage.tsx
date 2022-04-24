// React
import { Fragment } from 'react'
// React Router
import { NavLink } from "react-router-dom";
// React
import { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from './store/search';
// Elements
import MeaningsElement from './ResultPageElements/MeaningsElement';
import WordElement from './ResultPageElements/WordElement';
import PhoneticsElement from './ResultPageElements/PhoneticsElement';
import Title from './Title';

const ResultPage: React.FC = () => {
    const dispatch = useDispatch();
    const wordInfo = useSelector((state: any) => state.search.wordInfo);
    const error = useSelector((state: any) => state.search.notification);

    useEffect(() => {
        console.log(wordInfo.meanings);
    }, [wordInfo]);

    // let meanings = wordInfo.meanings
    //     .map((element: any, index: number) => {
    //         return (element[0] && (
    //             <Fragment>
    //                 <h3>{element[index]['partOfSpeech']}:</h3>
    //                 {element[index]['definitions'][0]['definition'] != false  && (
    //                     <p>definition: {element[index]['definitions'][0]['definition']}</p>
    //                 )}
    //                 {element[index]['synonyms'] != false && (
    //                     <p>synonyms: {element[index]['synonyms'].join(', ')}.</p>
    //                 )}
    //                 {wordInfo.meanings[index]['antonyms'] != false && (
    //                     <p>antonyms: {element[index]['antonyms'].join(', ')}.</p>
    //                 )}
    //             </Fragment>
    //         ))
    //     })
    //     .reduce((arr: any, el: any) => {
    //         return arr.concat(el);
    //     }, []);

    const cleanStateHandler = () => {
        dispatch(searchActions.cleanState());
    };

    return (
        <Fragment>
            <Title/>
            {wordInfo.word && (
                <Fragment>
                    <WordElement/>
                    {wordInfo.phonetics[0] && (
                        <PhoneticsElement index={0}/>
                    )}
                    {wordInfo.phonetics[1] && (
                        <PhoneticsElement index={1}/>
                    )}
                    {wordInfo.meanings[0] && (
                        <MeaningsElement index={0}/>
                    )}
                    {wordInfo.meanings[1] && (
                        <MeaningsElement index={1}/>
                    )}
                    {wordInfo.meanings[2] && (
                        <MeaningsElement index={2}/>
                    )}
                    {wordInfo.meanings[3] && (
                        <MeaningsElement index={3}/>
                    )}
                    {wordInfo.meanings[4] && (
                        <MeaningsElement index={4}/>
                    )}
                </Fragment>
            )}
            {error.status && (
                <Fragment>
                    <h2>{error.message}</h2>
                </Fragment>
            )}
            <NavLink to="/home-page">
                <button onClick={cleanStateHandler}>try another word</button>
            </NavLink>
        </Fragment>
    )
}

export default ResultPage;