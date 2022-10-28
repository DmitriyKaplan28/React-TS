import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {

        document.title = counter.toString()

    })
    useEffect(() => {

        document.title = counter.toString()

    }, [])
    useEffect(() => {

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

        setInterval(() => {

            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
}

export const TimeExample = () => {

    const date = new Date()
    const [hours, setHours] = useState(date.getHours)
    const [minutes, setMinutes] = useState(date.getMinutes)
    const [seconds, setSeconds] = useState(date.getSeconds)

    useEffect(() => {

        setInterval(() => {

            setHours(() => date.getHours())
            setMinutes(() => date.getMinutes())
            setSeconds(() => date.getSeconds())
        }, 1000)
    }, [])

    return <>
        {hours} : {minutes} : {seconds}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('reset effect starts')

    useEffect(() => {
        console.log('effect happened' + counter)

        return () => {
            console.log('reset effect')
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('1')

    console.log('keys starts')

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }

        window.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener("keypress", handler)
        }

    }, [text])


    return <>
        Hello, text: {text}
    </>
}

export const SetTimeoutExampleAgain = () => {
    const [text, setText] = useState('1')

    console.log('keys starts')

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('timeout expired')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearInterval(timeoutId)
        }

    }, [text])


    return <>
        Hello, text: {text}
    </>
}