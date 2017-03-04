/**
 * Created by drunkengranite on 3/4/17.
 */
import StateReducer from './StateReducers'
import ScheduleReducers from './ScheduleReducer'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const allReducers = combineReducers({
	state: StateReducer,
	schedule: ScheduleReducers,
	routing: routerReducer
});

export default allReducers;
