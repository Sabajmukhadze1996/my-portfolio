import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { LoadingText } from './components/LoadingText';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <LoadingText />
);

setTimeout(() => {
    root.render(
        <App />
    )
}, 5000)
