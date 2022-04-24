// React
import { Fragment } from 'react'
// Redux
import { useSelector } from 'react-redux';

const WordElement: React.FC = () => {
    const word = useSelector((state: any) => state.search.wordInfo.word);

    return (
        <Fragment>
            <p>word: {word}</p>
        </Fragment>
    )
}

export default WordElement;