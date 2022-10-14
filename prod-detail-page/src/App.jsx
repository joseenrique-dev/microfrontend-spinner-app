import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from './SafeComponent';
import PDPContent from './PDPContent';

import "remixicon/fonts/remixicon.css";
import "./index.scss";


const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header app={{ name: 'PDP' }}/>
      </SafeComponent>
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
        <PDPContent />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
