import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './bootstrap-5.2.3-dist/css/bootstrap.min.css';
import './css/cover.css';

console.info(`This React app is running in [${process.env.NODE_ENV}] mode.`);
const root = ReactDOM.createRoot(document.getElementById('root'));
if (process.env.NODE_ENV === 'development') {
  root.render(
    <App />
  );
}
else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
