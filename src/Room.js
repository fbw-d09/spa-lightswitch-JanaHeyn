import React, { useState } from 'react';

import './Room.css';

export const Room = () => {
    const [ lightState, setLightState ] = useState(true);

    const handleLightState = () => {
        setLightState(!lightState);
    };

    return(
        <div className={ `${lightState ? 'lit' : 'dark'} room` } >
            <p>The room is { `${lightState ? 'lit' : 'dark'}` }</p>
            <button onClick={ handleLightState }>Lightswitch</button>
        </div>
    )
}