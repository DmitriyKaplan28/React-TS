import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
};

const callBack = action('smth')

export const SimpleRating = () => <UncontrolledRating defaultValue={0} onChange={callBack}/>;
export const SimpleRating1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>;
export const SimpleRating2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>;
export const SimpleRating3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>;
export const SimpleRating4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>;
export const SimpleRating5 = () => <UncontrolledRating defaultValue={5} onChange={callBack}/>;
/*
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>;
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>;
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>;
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>;
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>;
export const RatingChange = () => {

    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}*/
