import { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from './store/search-slice';
import MeaningsElement from './ResultPageElements/MeaningsElement';
import WordElement from './ResultPageElements/WordElement';
import PhoneticsElement from './ResultPageElements/PhoneticsElement';
import SpinnerElement from './ResultPageElements/SpinnerElement';
import Title from './Title';

const ResultPage: React.FC = () => {
    const dispatch = useDispatch();
    const wordInfo = useSelector((state: any) => state.search.wordInfo);
    const error = useSelector((state: any) => state.search.notification);

    useEffect(() => {
        console.log(wordInfo.meanings);
    }, [wordInfo]);

    const cleanStateHandler = () => {
        dispatch(searchActions.cleanState());
    };

    return (
        <div className='result-page'>
            <Title/>
            {(wordInfo.word == false && error.message == false) && (
                <SpinnerElement/>
                )}
            {wordInfo.word && <WordElement/>}
            {wordInfo.word && wordInfo.phoneticsArray.map((element: any) => {
                return (
                    <PhoneticsElement key={Math.random()} phoneticsElement={element}/>
                )})
            }  
            {wordInfo.word && wordInfo.meaningsArray.map((element: any) => {
                return (
                    <MeaningsElement key={Math.random()} meaningsElement={element}/>
                )})
            }
            {error.message != false && (
                <Fragment>
                    <h2>{error.message}</h2>
                </Fragment>
            )}
            <NavLink to="/home-page">
                <button className='result-page__return-button' onClick={cleanStateHandler}><strong>try another word</strong></button>
            </NavLink>
        </div>
    )
}

export default ResultPage;