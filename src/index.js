import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);
ReactDOM.render(

        <Provider store = {store}>
            <BrowserRouter> 
                <App />
            </BrowserRouter>
        </Provider>  
    , document.getElementById('root'));
