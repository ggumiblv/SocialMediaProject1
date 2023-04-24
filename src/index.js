import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message:'Hi, how are you?', likesCount :'15'},
  {id: 2, message:"It's my first post" , likesCount:'20'},
  {id: 3, message:'Hi, how are you?', likesCount :'15'},
  {id: 4, message:'Hi, how are you?', likesCount :'15'},
] 

let dialogs = [
  { id: 1, name: 'Rustem' },
  { id: 2, name: 'Alsu' },
  { id: 3, name: 'Mama' },
  { id: 4, name: 'Gulnaz' },
  { id: 5, name: 'Papa' }
]

  let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your React?' },
  { id: 3, message: 'Well' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts}
    dialogs = {dialogs}
    messages = {messages}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
