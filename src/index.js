// import {React, ReactDom}
import React from 'react';
import ReactDOM from 'react-dom/client';

// import components
import App from "./ClientFrontEnd/Components/ClientApp";

// import Styling
import './ClientFrontEnd/SCSS/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
