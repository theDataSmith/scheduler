/**
 * Created by drunkengranite on 3/4/17.
 */
import StateReducer from './StateReducers'
import ScheduleReducers from './ScheduleReducer'
import SideBarReducer from './SideBarReducer'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const allReducers = combineReducers({
	state: StateReducer,
	sideBar: SideBarReducer,
	schedule: ScheduleReducers,
	routing: routerReducer
});

export default allReducers;
