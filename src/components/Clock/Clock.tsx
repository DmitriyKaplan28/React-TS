import React, {useEffect, useState} from 'react';

type PropsType = {}

export const Clock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
    const intervalID = setInterval(()=>{
        setDate(new Date ())
        console.log('tick')
    }, 1000)

        return () => {
        clearInterval(intervalID)
        }
    }, [])

    const getZeroBefore = (num:number) => num < 10 ? '0' + num : num

    return <div>
        <span>{getZeroBefore(date.getHours())}</span>
        :
        <span>{getZeroBefore(date.getMinutes())}</span>
        :
        <span>{getZeroBefore(date.getSeconds())}</span>
    </div>
}