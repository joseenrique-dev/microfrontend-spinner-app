import React from 'react';
import { Link } from 'react-router-dom';
import MiniCart from 'cart/MiniCart';
import Login from 'cart/Login';


export default function Header() {
    return (
    <div className='p-5 bg-green-500 text-white text-3x1 font-bold'>
        <div className="flex">
            <div className="flex-grow"><Link to="/">Spinner Shop</Link> | <Link to="/cart">Cart</Link></div>
            <div className='flex-end relative cursor-pointer'>
                <MiniCart />
                <Login />
            </div>
        </div>
    </div>
)}