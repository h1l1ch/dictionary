import { useSelector } from 'react-redux';

const WordElement: React.FC = () => {
    const word = useSelector((state: any) => state.search.wordInfo.word);

    return (
        <div>
            <p><strong>word:</strong> {word}</p>
        </div>
    )
}

export default WordElement;