import React from 'react';
import gif from '../../assets/gifs/leek-spin.gif'
import leekSpinAudio from '../../assets/audio/leek-spin.mp3';
import { FullWidthImage } from './styled';

const Loop = () => {
    const audio = new Audio(leekSpinAudio);
    audio.pause();
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();
    return <FullWidthImage src={gif}/>;
};

export default Loop;