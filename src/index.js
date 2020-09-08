import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';

// reduxstore
import {Provider} from 'react-redux';
import store from './redux/ReactReduxStore';

// router
import { BrowserRouter } from 'react-router-dom';

// const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    , document.getElementById('root'));
// }