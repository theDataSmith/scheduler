/**
 * Created by drunkengranite on 3/4/17.
 */
import StateReducer from './StateReducers'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const allReducers = combineReducers({
	state: StateReducer,
	routing: routerReducer
});

export default allReducers;
