/**
 * Created by drunkengranite on 3/4/17.
 */
import {handleActions} from 'redux-actions'
import {
	ADD_ITEM_TO_SCHEDULE, CLEAR_SCHEDULE, REMOVE_ITEM_FROM_SCHEDULE
}from
	'../constants/constants'
import Immutable from 'immutable'


let initialState = {
	schedule: {
		"Time": {
			"Content":[7,8,9,10,11,12,1,2,3,4,5,6,7,8,9]
		},
		"Sunday": {
			"Content":[

			]

		},
		"Monday": {
			"Content":[

			]
		},
		"Tuesday": {
			"Content":[

			]
		},
		"Wednesday": {
			"Content":[

			]
		},
		"Thursday": {
			"Content":[

			]
		},
		"Friday": {
			"Content":[

			]
		},
		"Saturday": {
			"Content":[

			]
		},
	},
	addedClasses: [
		{
			name: "Math 105",
			days: {
				
			},
			start: 4,
			end: 5
		},
		{
			name: "English 52",
			days: [],
			start: 4,
			end: 5
		},
		{
			name: "Boobs 101",
			days: [],
			start: 4,
			end: 5
		},
	]
};



const ScheduleReducer = handleActions({

	[ADD_ITEM_TO_SCHEDULE]: (state, action) => {
		return {
			...state,
			schedule: state.schedule.concat(action.payload),
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