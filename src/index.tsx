import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { BrowserRouter } from "react-router-dom";
// React Redux
import store from './store/index';
import { Provider } from 'react-redux';
// CSS
import './index.css';
// Components
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);