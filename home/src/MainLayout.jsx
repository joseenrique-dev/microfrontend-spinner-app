import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from 'prod_detail_page/PDPContent';
import SafeComponent from 'prod_detail_page/SafeComponent';
import HomeContent from 'home/HomeContent';
import CartContent from 'cart/CartContent';
import { useStore } from 'store/store';

//INFORMATION:Example using Lazy Loading, (MF is async).
// const Header = React.lazy(() => import("home/Header"));
// <Suspense fallback={<div>Loading</div>}>
// 	<Header />
// </Suspense>
import 'remixicon/fonts/remixicon.css';
// import './index.scss';

const MainLayout = () => {
  const { getStoreProducts } = useStore();

  useEffect(() => getStoreProducts(), []);

  return (
    <BrowserRouter>
      <div className='mt-10 text-3xl mx-auto max-w-6xl'>
        <SafeComponent>
          <Header />
        </SafeComponent>
        <div className='my-10'>
          <Routes>
            <Route exact path='/' element={<HomeContent />} />
            <Route path='/product/:id' element={<PDPContent />} />
            <Route path='/cart' element={<CartContent />} />
          </Routes>
          <PDPContent />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
