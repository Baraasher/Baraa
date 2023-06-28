import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App.jsx';
import i18n from './i18n.js';
import { inject } from '@vercel/analytics';
import 'animate.css';

inject();

createRoot(document.getElementById('root')).render( // Use createRoot directly
  <StrictMode>
    <App i18n={i18n} />
  </StrictMode>
);
