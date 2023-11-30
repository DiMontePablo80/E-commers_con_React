/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDgYNt361MGW9LHaMscbPqy6kXdWzfh3vo",
  authDomain: "coderreactpablo.firebaseapp.com",
  projectId: "coderreactpablo",
  storageBucket: "coderreactpablo.appspot.com",
  messagingSenderId: "7452911912",
  appId: "1:7452911912:web:e953173e1cc5bbf0c5881d"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
