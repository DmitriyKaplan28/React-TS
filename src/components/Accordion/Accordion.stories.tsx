import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
};

const callBack = action('smth happened')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onClick={callBack} collapsed={true}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} onClick={callBack} collapsed={false}/>;


export const ModeChange = () => {

    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} onClick={() => setValue(!value)} collapsed={value}/>
}