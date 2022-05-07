import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
//import {Simulate} from "react-dom/test-utils";
//import input = Simulate.input;


export default {
    title: 'input',
    //component: input
};
const [value, setValue] = useState('')
const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
}

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {


    return <><input onChange={onChange}/> - {value} </>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    //const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onSave}>save
        </button>
         - actual value {value} </>;
}


export const ControlledInput = () => <input value={'test'}/>;

