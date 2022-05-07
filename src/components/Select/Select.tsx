import React from "react";
import {RatingValueType} from "../Rating/Rating";

type ItemType ={
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    console.log("Rating rendering")

    return (
        <div>
            <div>{props.items.filter(i => i.value === props.value ? i.title : '')}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
}