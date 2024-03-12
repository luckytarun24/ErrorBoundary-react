import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorBoundary from './errorBoundary.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={<div className="fallback">Somthing went wrong</div>}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
