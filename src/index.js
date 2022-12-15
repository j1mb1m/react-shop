import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog";

global._babelPolyfill = false;

ReactDOM.render(
  <React.StrictMode>
         <Router> 
          <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/react-shop" element={<App />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/contacts" element={<Contacts />} />
        </Routes>

      </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
