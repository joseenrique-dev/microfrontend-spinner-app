import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { currency, getProductById } from '../../home/src/products';
import placeAddToCart from 'addtocart/placeAddToCart';
import { useStore } from 'store/store';

export default function PDPContent() {
  const { id } = useParams();
  const { products } = useStore();
  const [product, setProduct] = useState(null);
  const addToCart = useRef(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id == id);
    setProduct(selectedProduct);
  }, []);

  useEffect(() => {
    if (addToCart.current) placeAddToCart(addToCart.current, product.id);
  }, [product]);

  if (!product) return null;
  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className='flex'>
          <h1 className='font-bold text-3x1 flex-grow'>{product.name}</h1>
          <div className='font-bold text-3x1 flex-end'>
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className='mt-10'>{product.description}</div>
        <div className='mt-10'>{product.longDescription}</div>
      </div>
    </div>
  );
}
