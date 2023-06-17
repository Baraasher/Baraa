import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import i18n from './i18n.js';
import { inject } from '@vercel/analytics';
import 'animate.css';

inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App i18n={i18n} />
  </StrictMode>
);
