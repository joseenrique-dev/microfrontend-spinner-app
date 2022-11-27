import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './MainLayout';
import { StoreProvider } from 'store/store';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

ReactDOM.render(
  <StoreProvider>
    <MainLayout />
  </StoreProvider>,
  document.getElementById('app')
);
