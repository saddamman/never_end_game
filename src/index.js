import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppPoc from './AppPoc';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <AppPoc />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an s endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
