import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
};

const callBack = action('smth happened')
const onClickCallBack = action('item clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  onChange={callBack}
                                                  collapsed={true}
                                                  items={[]}
                                                  onClick={onClickCallBack}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'}
                                                     onChange={callBack}
                                                     collapsed={false}
                                                     items={[{title: '1user', value: 1}, {title: '2user', value: 2}, {title: '3user', value: 3}, {title: '4user', value: 4}]}
                                                     onClick={onClickCallBack}/>;


export const ModeChange = () => {

    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      onChange={() => setValue(!value)}
                      collapsed={value}
                      items={[{title: '1user', value: 1}, {title: '2user', value: 2}, {
                          title: '3user',
                          value: 3
                      }, {title: '4user', value: 4}]}
                      onClick={(id) => {
                          alert(`user with ID ${id} should be happy`)
                      }}/>
}