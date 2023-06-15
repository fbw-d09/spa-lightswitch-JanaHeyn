import React, { useState } from 'react';

import './Room.css';

export const Room = () => {
    const [ lightState, setLightState ] = useState(true);

    const handleLightState = () => {
        setLightState(!lightState)
    };

    return(
        <div className={ lightState ? 'lit' : 'dark' }>
            <p>The room is { `${lightState ? 'lit' : 'dark'}` }</p>
            <button onClick={ handleLightState }></button>
        </div>
    )
}