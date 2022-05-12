import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
};


export const BaseExampleWithValue = () => {
    const [value, setValue] = useState('1');

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "SPb"},
                    {value: "2", title: "MSc"},
                    {value: "3", title: "City"},
                ]}/>
    </>
}

export const BaseExampleWithoutValue = () => {
    const [value, setValue] = useState(null);


    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "SPb"},
                    {value: "2", title: "MSc"},
                    {value: "3", title: "City"},
                ]}/>
    </>
}
