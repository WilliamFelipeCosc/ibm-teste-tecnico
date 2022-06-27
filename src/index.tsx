import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavRoutes from './routes/NavRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavRoutes />
  </React.StrictMode>
);
