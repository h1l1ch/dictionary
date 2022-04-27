const PhoneticsElement: React.FC<{phoneticsElement: any}> = (props) => {

    const playPhonicsAudioHandler = (event: any) => {
        event!.preventDefault();
        const music = new Audio(props.phoneticsElement['audio']);
        music.play();
    };

    return (
        <div>
            <p><strong>phonetics:</strong>{props.phoneticsElement['text'] != undefined && props.phoneticsElement['text']}</p>
            {props.phoneticsElement['audio'] != false && (
                <button onClick={playPhonicsAudioHandler}>play</button>
            )}
        </div>
    )
}

export default PhoneticsElement;