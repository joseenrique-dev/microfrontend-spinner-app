import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const API_SERVER = 'http://localhost:8080';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
  },
  reducers: {
    getStoreProducts: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStoreProducts } = productsSlice.actions;

export const fetchProduct = () => async (dispatch) => {
  try {
    fetch(`${API_SERVER}/products`)
      .then((response) => response.json())
      .then((data) => dispatch(getStoreProducts(data)));
  } catch (e) {
    console.error(e.message);
  }
};

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export function useStore() {
  const products = useSelector((state) => state.products.productsList);
  console.log('Products from store UseStore', products);
  const dispatch = useDispatch();
  return {
    products,
    getStoreProducts: () => dispatch(fetchProduct()),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
