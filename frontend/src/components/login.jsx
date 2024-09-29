import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcwlOmF9HIk3_24aKNHkJjT6FPQiwy2Mo",
  authDomain: "hacker-s-portal.firebaseapp.com",
  projectId: "hacker-s-portal",
  storageBucket: "hacker-s-portal.appspot.com",
  messagingSenderId: "848457459024",
  appId: "1:848457459024:web:7ed2c2dcd7624d39a03855",
  measurementId: "G-3D11Q02VRT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

const Login = () => {
  const [value, setValue] = useState('');
  const [dup, setDup] = useState(1);
  const [log, setLog] = useState(['Welcome to Hacker\'s Portal Terminal. Type "help" for available commands.']);
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    setLog((prevLog) => [...prevLog, '> login', 'Attempting to login...']);
    await delay(1000); // simulate delay for random text

    addRandomLogText();
    await firebase.auth().signInWithPopup(provider).then((data) => {
      setValue(data.user.displayName);
      sessionStorage.setItem("name", data.user.displayName);
      sessionStorage.setItem("email", data.user.email);
      setAuthenticated(true);
    });

    let req = await fetch("http://localhost:3000/user");
    let data = await req.json();
    let arr = [];
    data.map((item) => {
      arr.push(item.id);
    });
    arr.map(async (arrelem) => {
      if ((sessionStorage.getItem('name') == arrelem)) {
        setDup(0);
      }
    });

    if (dup) {
      let a = await fetch(`http://localhost:3000/user`, {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ "name": localStorage.getItem('name') })
      }).then(() => {
        alert("success");
      })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('User already exists');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = input.trim().toLowerCase();
      if (command === 'help') {
        setLog([...log, '> help', 'Available commands:', 'login - Login with Google', 'about - About this terminal', 'clear - Clear the terminal']);
      } else if (command === 'login') {
        handleSubmit();
      } else if (command === 'about') {
        setLog([...log, '> about', 'Hacker\'s Portal Terminal - Simulated terminal for authentication']);
      } else if (command === 'clear') {
        setLog([]);
      } else {
        setLog([...log, `> ${command}`, `Unknown command: ${command}`]);
      }
      setInput('');
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const addRandomLogText = async () => {
    const randomText = [
      'Connecting to authentication server...',
      'Fetching user credentials...',
      'Validating login information...',
      'Establishing secure connection...',
      'Finalizing authentication process...'
    ];

    for (const text of randomText) {
      setLog((prevLog) => [...prevLog, text]);
      await delay(1000); // simulate delay for random text
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem('name'));
  }, []);

  return (
    <div className="h-[91vh] flex items-center justify-center w-full bg-login">
      {authenticated ? <Navigate to={'/'} /> :
        <div className="w-[60vw] h-[70vh] p-4 text-white overflow-hidden bg-gray-900 rounded-lg shadow-lg">
          <div className="bg-gray-800 p-2 flex justify-between items-center rounded-t-lg">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-sm">Terminal</div>
            <div></div>
          </div>
          <div className="p-4 h-full font-mono text-green-500">
            <div className="h-[55vh] overflow-y-scroll">
              {log.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            <div className="flex">
              <span className="mr-2">{'>'}</span>
              <input
                className="w-full bg-transparent focus:outline-none text-green-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                autoFocus
              />
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Login;
