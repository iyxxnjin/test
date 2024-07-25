import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 웹 애플리케이션 성능 데이터 수집할 때 쓰임
// reportWebVitals(console.log);
