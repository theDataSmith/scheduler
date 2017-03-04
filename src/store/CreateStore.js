/**
 * Created by drunkengranite on 3/4/17.
 */
import allReducers from '../reducers/CombineReducers'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux';


const middleware = applyMiddleware(
	routerMiddleware(browserHistory),
	thunk
);

const initStore = createStore(allReducers, middleware);



export default initStore;