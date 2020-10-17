import React, { useEffect, useState } from 'react';
import { CenteredTextDiv, StyledHeader } from './styled';

const getElapsedTimeInSeconds = (startTime) => {
    const elapsedTime = (new Date()) - startTime;
    return Math.floor(elapsedTime / 1000);
}

const stringifyNumberWithTwoDigits = (num) => {
    if (num >= 10) {
        return String(num);
    }
    return `0${num}`;
}

const getMinutesFromSeconds = (seconds) =>
    Math.floor(seconds / 60) % 60;

const getHoursFromSeconds = (seconds) =>
    Math.floor(seconds / (60 * 60)) % 60;

const updateInterval = (startTime, setDuration) => {
    const elapsedTimeInSeconds = getElapsedTimeInSeconds(startTime);
    const seconds = elapsedTimeInSeconds % 60;
    const minutes = getMinutesFromSeconds(elapsedTimeInSeconds);
    const hours = getHoursFromSeconds(elapsedTimeInSeconds);

    const secondsString = stringifyNumberWithTwoDigits(seconds);
    const minutesString = stringifyNumberWithTwoDigits(minutes);
    const hoursString = stringifyNumberWithTwoDigits(hours);
    setDuration(`${hoursString}:${minutesString}:${secondsString}`);
}

const Stopwatch = () => {
    const [duration, setDuration] = useState();

    useEffect(() => {
        const startTime = new Date();

        setDuration('0:00:00');
        const interval = setInterval(
            () => updateInterval(startTime, setDuration),
            100
        );
        
        return () => clearInterval(interval);
    }, []);

    return (
        <CenteredTextDiv>
            <StyledHeader>You've been spinning for { duration }</StyledHeader>
        </CenteredTextDiv>
    );
};

export default Stopwatch;