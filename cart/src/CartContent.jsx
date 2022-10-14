import React, { useEffect, useState } from "react";
import { cart, jwt } from 'cart/cart';
import { currency } from 'home/products';

export default function CartContent() {
    
    const [ token, setToken ] = useState("");
    const [ items, setItems ] = useState([]); 
    
    useEffect(()=>{
        return jwt.subscribe((val)=> setToken(val ?? ""))
    },[]);

    useEffect(
        ()=> cart.subscribe((value)=> setItems(value?.cartItems ?? [])),[]);

    return (
        <>
            <div className='my-10 grid grid-cols-4 gap-5'>
                {items.map((item) => (
                        <React.Fragment key={item.id}>
                            <div>{item.quantity}</div>
                            <img src={item.image} alt={item.name} className="max-h-6" />
                            <div>{item.name}</div>
                            <div className="text-right">
                                {currency.format(item.quantity * item.price)}
                            </div>
                        </React.Fragment>
                    ))}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        {currency.format(
                        items.reduce((a, v) => a + v.quantity * v.price, 0)
                        )}
                    </div>
            </div>
        </>
    )
}