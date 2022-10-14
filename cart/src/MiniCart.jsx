import React, { useEffect, useState } from 'react';
import { cart } from './cart';

export default function MiniCart(){
    const [ items, setItems ] = useState(undefined);
    const [showCart, setShowCart] = useState(false);

    useEffect(()=>{
        setItems( cart.values?.cartItem );
        return cart.subscribe((element) => {
            setItems(element?.cartItems);
        });
    });
    if( !items ) return null;
    return (
        <>
            <span onClick={() => setShowCart(!showCart)} id="showcart_span">
                <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
                {items.length}
            </span>
        </>
    )
}