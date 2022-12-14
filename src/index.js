import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Rendering the React App into the HTML DOM Element "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
