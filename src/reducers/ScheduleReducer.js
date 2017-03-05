/**
 * Created by drunkengranite on 3/4/17.
 */
import {handleActions} from 'redux-actions'
import {
	ADD_ITEM_TO_SCHEDULE, CLEAR_SCHEDULE, REMOVE_ITEM_FROM_SCHEDULE
}from
	'../constants/constants'
import Immutable from 'immutable'

const placeHolder = {
	time: 1,
	type: "placeholder"
};

const blankSchedule = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


let initialState = {
	schedule: Immutable.fromJS({
		"Sunday": {
			"Content": blankSchedule
		},
		"Monday": {
			"Content": blankSchedule
		},
		"Tuesday": {
			"Content": blankSchedule
		},
		"Wednesday": {
			"Content": blankSchedule
		},
		"Thursday": {
			"Content": blankSchedule
		},
		"Friday": {
			"Content": blankSchedule
		},
		"Saturday": {
			"Content": blankSchedule,
		},
	}),

};


const ScheduleReducer = handleActions({

	[ADD_ITEM_TO_SCHEDULE]: (state, action) => {
		const tab = Immutable.fromJS(action.payload);

		let newSchedule = state.schedule.map((value, weekDay) => {

			if (tab.get('days').contains(weekDay)) {
				const time = tab.get('startTime');
				let keyOfHour = value.get('Content')
				//returns the key value if the array contains the hour
					.findKey((value) => value === time);

				//if its available we do this, else it breaks and drops out
				if (keyOfHour) {
					const newContent = value.get("Content")
						.splice(keyOfHour, tab.get('time'), tab);

					return value.set('Content', newContent);
				}
			}

			return value

		});


		return {
			...state,
			schedule: newSchedule
		}


	},

	[CLEAR_SCHEDULE]: (state, action) => {
		return {
			...state,
			schedule: initialState.schedule
		}
	},

	[REMOVE_ITEM_FROM_SCHEDULE]: (state, action) => {
		const toRemoveTab = action.payload;
		let newSchedule = state.schedule.map((value, weekday) => {
			if (toRemoveTab.get('days').contains(weekday)) {
				let keyOfHour = value.get('Content')

				//returns the key value if the array contains the tab
				.findKey((value) => value === toRemoveTab);

				const iterables = [];
				let counter = keyOfHour;
				while (counter !== keyOfHour + toRemoveTab.get('time')){
					iterables.push(counter);
					counter++
				}
				const newContent = value.get("Content")
					.splice(keyOfHour, 1, ...iterables);
				return value.set('Content', newContent);
			}
			return value;
		});

		return {
			...state,
			schedule: newSchedule
		}
	},


}, initialState);

export default ScheduleReducer;