import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Optionally, import your global CSS if you have one:
// import './index.css';

// Find the root element in your public/index.html file
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

