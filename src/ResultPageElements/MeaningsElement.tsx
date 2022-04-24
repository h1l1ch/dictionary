// React
import { Fragment } from 'react'
// Redux
import { useSelector } from 'react-redux';

const MeaningsElement: React.FC<{index: number}> = (props) => {
    const meaningsElement = useSelector((state: any) => state.search.wordInfo.meanings[props.index]);

    return (
        <div className='result-page__meanings-element'>
            <p>
                <strong>{meaningsElement['partOfSpeech']}:</strong> {meaningsElement['definitions'][0]['definition'] != false  && meaningsElement['definitions'][0]['definition']}
            </p>
            {meaningsElement['synonyms'] != false && (
                <p><strong>synonyms:</strong> {meaningsElement['synonyms'].join(', ')}.</p>
            )}
            {meaningsElement['antonyms'] != false && (
                <p><strong>antonyms:</strong> {meaningsElement['antonyms'].join(', ')}.</p>
            )}
        </div>
    )
}

export default MeaningsElement;