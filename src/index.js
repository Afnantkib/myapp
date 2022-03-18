import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAza-SmwVRIVKCy2m26WTJaDoM8tayhDds",
  authDomain: "myapp-547da.firebaseapp.com",
  projectId: "myapp-547da",
  storageBucket: "myapp-547da.appspot.com",
  messagingSenderId: "157425103679",
  appId: "1:157425103679:web:14a8494404d702ccad998a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


