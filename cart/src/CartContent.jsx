import React, { useEffect, useState } from "react";
import Login from './Login';

export default function CartContent() {
    const [ token, setToken ] = useState("");
    
    return (
        <div>
            <Login />
            JWT: { token }
            </div>
    )
}