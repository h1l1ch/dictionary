import { useSelector } from 'react-redux';

const WordElement: React.FC = () => {
    const word = useSelector((state: any) => state.search.wordInfo.word);

    return (
        <div className='result-page__word-element'>
            <p><strong>word:</strong> {word}</p>
        </div>
    )
}

export default WordElement;