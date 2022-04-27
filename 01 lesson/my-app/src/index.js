import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render() -> this is the most basic function in react
// show the output to the dom
ReactDOM.render(
  <React.StrictMode>
    {/* for now - App.js is the only file outside */}
    <App />
  </React.StrictMode>,
  // goes to the only HTML file in the website: index.html
  document.getElementById('root')
);

reportWebVitals();
