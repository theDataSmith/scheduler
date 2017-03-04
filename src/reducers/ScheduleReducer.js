/**
 * Created by drunkengranite on 3/4/17.
 */
import {handleActions} from 'redux-actions'
import {
	ADD_ITEM_TO_SCHEDULE, CLEAR_SCHEDULE, REMOVE_ITEM_FROM_SCHEDULE
}from
	'../constants/constants'



let initialState = {
	item : 1
};



const ScheduleReducer = handleActions({

	[ADD_ITEM_TO_SCHEDULE]: (state, action) => {
		return {
			...state,
			glarp: action.payload,
			item: 6,
		}
	},

	[CLEAR_SCHEDULE]: (state, action) => {
		return {
			...state,
		}
	},

	[REMOVE_ITEM_FROM_SCHEDULE]: (state, action) => {
		return {
			...state,
		}
	},


}, initialState);

export default ScheduleReducer;