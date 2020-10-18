import React from 'react';
import Stopwatch from './stopwatch';
import Loop from './Loop';

const App = () => {
    document.title = "Leek Spin";
    return (
        <>
            <Stopwatch />
            <Loop />
        </>
    );
};

export default App;