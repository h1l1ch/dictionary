// React
import { Fragment } from 'react'
// Redux
import { useSelector } from 'react-redux';

const PhoneticsElement: React.FC<{index: number}> = (props) => {
    const phonetics = useSelector((state: any) => state.search.wordInfo.phonetics[props.index]);

    const playPhonicsAudioHandler = (event: any) => {
        event!.preventDefault();
        const music = new Audio(phonetics['audio']);
        music.play();
    };

    return (
        <div className='result-page__phonetics-element'>
            <p><strong>phonetics:</strong>{phonetics['text'] != undefined && phonetics['text']}</p>
            {phonetics['audio'] != false && (
                <button onClick={playPhonicsAudioHandler}>play</button>
            )}
        </div>
    )
}

export default PhoneticsElement;