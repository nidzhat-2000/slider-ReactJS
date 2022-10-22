import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Another } from './Another';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Another /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
