import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { currency } from './products';
import { addToCart, useLoggedIn } from 'cart/cart';
import { useStore } from 'store/store';
import styles from './exampleCss.module.scss';

export const globalHomeStyle = styles;

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const { products } = useStore();
  console.log('Local css module log->', styles);

  return (
    <div className='grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className='flex'>
            <div className='flex-frow font-bold'>{product.name}</div>
            <div className='flex-end'>{currency.format(product.price)}</div>
          </div>
          <div className={`text-sm mt-4 ${styles.exampleCss}`}>
            {product.description}
          </div>
          {loggedIn && (
            <div className='text-right mt-2'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded'
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
