/**
 * Created by Gmaddog2020 on 3/4/17.
 */

import {handleActions} from 'redux-actions'
import {
	ADD_COURSE_TO_SIDEBAR
}from
	'../constants/constants'

let initialState = {
	courses: [],
};

const SideBarReducer = handleActions({
	
	[ADD_COURSE_TO_SIDEBAR]: (state, action) => {
		return {
			...state,
			courses: state.courses.concat([action.payload]),
		}
	}
}, initialState);

export default SideBarReducer;
