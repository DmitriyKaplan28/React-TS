import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const getZeroBefore = (num: number) => num < 10 ? '0' + num : num

    return <> <span>{getZeroBefore(date.getHours())}</span>
        :
        <span>{getZeroBefore(date.getMinutes())}</span>
        :
        <span>{getZeroBefore(date.getSeconds())}</span>
    </>
}