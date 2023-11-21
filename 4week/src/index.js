import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Body } from './components/Movie/Movie.style';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body>
      <App />
    </Body>
  </React.StrictMode>
);

