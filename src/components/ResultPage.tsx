import { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../store/search-slice';
import MeaningsElement from './ResultPageComponents/MeaningsElement';
import WordElement from './ResultPageComponents/WordElement';
import PhoneticsElement from './ResultPageComponents/PhoneticsElement';
import SpinnerElement from './ResultPageComponents/SpinnerElement';
import Title from './Title';
import { StyledResultPage } from './styles/ResultPage.styled'

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
        <StyledResultPage>
            <Title/>
            {(wordInfo.word == false && error.message == false) && (
                <SpinnerElement/>
            )}
            <div>
                {wordInfo.word && <WordElement/>}
                {wordInfo.word && wordInfo.phoneticsArray.map((element: any) => {
                    return (
                        <PhoneticsElement key={Math.random()} phoneticsElement={element}/>
                    )
                })}  
                {wordInfo.word && wordInfo.meaningsArray.map((element: any) => {
                    return (
                        <MeaningsElement key={Math.random()} meaningsElement={element}/>
                    )
                })}
                {error.message != false && (
                    <Fragment>
                        <h2>{error.message}</h2>
                    </Fragment>
                )}
            </div>
            <NavLink to="/home-page">
                <button onClick={cleanStateHandler}><strong>try another word</strong></button>
            </NavLink>
        </StyledResultPage>
    )
}

export default ResultPage;