import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// // reduxstore
// import {Provider} from 'react-redux';
// import store from './redux/ReactReduxStore';

// // router
// import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    // <Provider store={store}>
    //     <BrowserRouter>
            <App />
    //     </BrowserRouter>
    // </Provider>
, document.getElementById('root'));
