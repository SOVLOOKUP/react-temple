import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as reducers from './reducers/counter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers(
        reducers
    ),
    // combineReducers({
    //     counter: reducers.counterReducer
    // }),
    composeEnhancers(applyMiddleware(thunk,logger))
    )

export default store;