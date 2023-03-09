import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cardlist from './Cardlist';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import  {robots}  from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Cardlist robots={robots}/>
);
reportWebVitals();
