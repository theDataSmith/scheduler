/**
 * Created by drunkengranite on 3/4/17.
 */

import {
	ADD_ITEM_TO_SCHEDULE
} from '../constants/constants'

export const addToSchedule = (item) =>{
	return {
		type: ADD_ITEM_TO_SCHEDULE,
		payload: item,
	}
};
