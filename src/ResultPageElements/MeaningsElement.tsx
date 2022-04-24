// React
import { Fragment } from 'react'
// Redux
import { useSelector } from 'react-redux';

const MeaningsElement: React.FC<{index: number}> = (props) => {
    const meaningsElement = useSelector((state: any) => state.search.wordInfo.meanings[props.index]);

    return (
        <Fragment>
            <p>
                {meaningsElement['partOfSpeech']}: {meaningsElement['definitions'][0]['definition'] != false  && meaningsElement['definitions'][0]['definition']}
            </p>
            {meaningsElement['synonyms'] != false && (
                <p>synonyms: {meaningsElement['synonyms'].join(', ')}.</p>
            )}
            {meaningsElement['antonyms'] != false && (
                <p>antonyms: {meaningsElement['antonyms'].join(', ')}.</p>
            )}
        </Fragment>
    )
}

export default MeaningsElement;