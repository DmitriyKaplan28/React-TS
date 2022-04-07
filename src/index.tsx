import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




let a = {
    name: "Dima",
    age: 28,
    adress: {
        city: "Saint-Petersburg",
        country: "Russia"
    }
};

let users = [
    {
        name: "Dima",
        age: 28,
        adress: {
            city: "Saint-Petersburg",
            country: "Russia"
        }
    },
    {
        name: "Viktor",
        age: 30,
        adress: {
            city: "Saint-Petersburg",
            country: "Russia"
        }
    }
]

console.log(users[0].adress.country);