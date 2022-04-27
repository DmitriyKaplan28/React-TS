import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};

const callBack = action('smth happened')

export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={'Menu'} />;
export const UsersUnCollapsedMode = () => <UncontrolledAccordion titleValue={'Users'} />;


export const ModeChange = () => {

    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledAccordion titleValue={'Users'} />
}