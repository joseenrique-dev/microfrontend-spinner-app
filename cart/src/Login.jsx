import React, { useState } from "react";
import { login, useLogeedIn } from './cart';

export default function Login() {
    const loggedIn = useLogeedIn();
    const [ showLogin, setShowLogin ] = useState(false);

    const [ username, setUsername ] = useState("sally");
    const [ password, setPassword ] = useState("123");

    const onLoginSubmit = (event) =>{
        event.preventDefault(); 
        login(username,password)
        .then((token)=>{
            console.log(token);
            setShowLoggin(true);
        })
        .catch(err =>{
            debugger
            console.log(err)
        });
    }

    // if ( !loggedIn ) return null;

    return (
        <>
            <span onClick={()=> setShowLogin(!showLogin)}>
                <i className='ri-fingerprint-line text2x1' id='showLogin'></i>
            </span>
            {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
        </>
    );
}