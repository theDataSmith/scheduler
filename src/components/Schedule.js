/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'
import {connect} from "react-redux";
import * as scheduleActions from '../actions/ScheduleActions'
import ReactDataGrid from 'react-data-grid';
import Immutable from 'immutable';
import ScheduleColumn from './ScheduleColumn'
const Schedule = (props) => {
	// const columns = [
	// 	{ key: 'Time', name: 'Time' },
	// 	{ key: 'Sunday', name: 'Sunday' },
	// 	{ key: 'Monday', name: 'Monday' },
	// 	{ key: 'Tuesday', name: 'Tuesday' },
	// 	{ key: 'Wednesday', name: 'Wednesday'},
	// 	{ key: 'Thursday', name: 'Thursday' },
	// 	{ key: 'Friday', name: 'Friday' },
	// 	{ key: 'Saturday', name: 'Saturday' },
	// 	];

	//
	// const rowGetter = (i) => {
	// 	return props.currentSchedule[i];
	// };
	const schedule = Immutable.Map(props.currentSchedule);


	const Monday  =  schedule.get('Monday');
	const Tuesday  =  schedule.get('Tuesday');
	const Wednesday  =  schedule.get('Wednesday');
	const Thursday  =  schedule.get('Thursday');
	const Friday  =  schedule.get('Friday');


	return (
		<div className="Schedule">
			<ScheduleColumn name="Time" />
			<ScheduleColumn name="Monday" />
			<ScheduleColumn name="Tuesday" />
			<ScheduleColumn name="Wednesday" />
			<ScheduleColumn name="Thursday" />
			<ScheduleColumn name="Friday" />
			<ScheduleColumn name="Saturday" />
			<ScheduleColumn name="Sunday" />
		</div>
	);
};


export default connect(
	(state) => ({
		currentSchedule : state.schedule.schedule
	}),
	(dispatch) => ({
		clickTabs: () => dispatch(scheduleActions.addToSchedule("clapton"))
	})
)(Schedule)
