import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};

const callBack = action('smth happened')



export const ModeChange = () => {
    return <UncontrolledAccordion titleValue={'Users'} />
}