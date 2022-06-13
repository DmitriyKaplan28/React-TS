import React from 'react';
import {Clock} from "./Clock";


export default {
    title: 'clock',
    component: Clock,
};




export const ClockAnalogExample = () => {

    return <Clock mode={'analog'}/>
}
export const ClockDigitalExample = () => {

    return <Clock mode={'digital'}/>
}



