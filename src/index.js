import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

// Use createRoot instead of ReactDOM.render
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
