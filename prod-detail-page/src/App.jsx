import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header, { cssExample } from 'home/Header';
import Footer from 'home/Footer';
import SafeComponent from './SafeComponent';
import PDPContent from './PDPContent';
import { StoreProvider } from 'store/store';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

console.log('test importation', cssExample);
const App = () => (
  <StoreProvider>
    <BrowserRouter>
      <div className='mt-10 text-3xl mx-auto max-w-6xl'>
        <SafeComponent>
          <Header />
        </SafeComponent>
        <div className='my-10'>
          <Routes>
            <Route path='/product/:id' element={<PDPContent />} />
          </Routes>
          <PDPContent />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
