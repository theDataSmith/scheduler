/**
 * Created by Gmaddog2020 on 3/4/17.
 */

import {
	ADD_COURSE_TO_SIDEBAR
} from '../constants/constants'

export const addCourseToSideBar = (course) =>{
	return {
		type: ADD_COURSE_TO_SIDEBAR,
		payload: course,
	}
};
