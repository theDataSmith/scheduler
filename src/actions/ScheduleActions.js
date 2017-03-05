/**
 * Created by drunkengranite on 3/4/17.
 */

import {
	ADD_ITEM_TO_SCHEDULE, REMOVE_ITEM_FROM_SCHEDULE
} from '../constants/constants'

export const addToSchedule = (item) =>{
	return {
		type: ADD_ITEM_TO_SCHEDULE,
		payload: item,
	}
};

export const removeFromSchedule = (item) =>{
	return {
		type: REMOVE_ITEM_FROM_SCHEDULE,
		payload: item,
	}
};



export const runTest = () => {
	return (dispatch, getState) => {
		const exampleTab = {
			startTime: 4,
			time: 2,
			days: ["Monday", "Wednesday", "Friday"],
			name: "Boobs 69"
		};
		const exampleTab0 = {
			startTime: 10,
			time: 1,
			name: "Boobs 101",
			days: ["Monday", "Wednesday"],

		};
		const exampleTab1 = {
			startTime: 7,
			time: 3,
			name: "Bob Ross Kappa",
			days: ["Tuesday", "Thursday"],

		};
		dispatch(addToSchedule(exampleTab));
		dispatch(addToSchedule(exampleTab0));
		dispatch(addToSchedule(exampleTab1));

	};
};