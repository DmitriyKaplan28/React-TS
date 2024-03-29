import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const Example1 = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1;
    let resultB = 1;

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>

        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>

        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('help')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Oksana', 'name3'])
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') - 1);
        return newArray
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, 'someName' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js', 'css', 'HTML'])

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}

const BooksSecret = (props: { addBook: () => void }) => {
    console.log('books secret')
    return <div>
        <button onClick={props.addBook}>Add book</button>
    </div>
}

const Books = React.memo(BooksSecret)