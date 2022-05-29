import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('Example')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()

    })
    useEffect(() => {
        console.log('useEffect only during first render (componentDidMount)')
        document.title = counter.toString()

    }, [])
    useEffect(() => {
        console.log('useEffect during first render and when counter is changing')
        document.title = counter.toString()

    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        console.log('useEffect every render')
        setInterval(() => {
            console.log('interval' + counter)
            setCounter((state) => state + 1)
        }, 1000)
    }, [])



    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
}