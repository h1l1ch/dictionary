const MeaningsElement: React.FC<{meaningsElement: any}> = (props) => {

    return (
        <div>
            <p>
                <strong>{props.meaningsElement['partOfSpeech']}:</strong> {props.meaningsElement['definitions'][0]['definition'] != false  && props.meaningsElement['definitions'][0]['definition']}
            </p>
            {props.meaningsElement['synonyms'] != false && (
                <p><strong>synonyms:</strong> {props.meaningsElement['synonyms'].join(', ')}.</p>
            )}
            {props.meaningsElement['antonyms'] != false && (
                <p><strong>antonyms:</strong> {props.meaningsElement['antonyms'].join(', ')}.</p>
            )}
        </div>
    )
}

export default MeaningsElement;