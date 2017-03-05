/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'
import {connect} from "react-redux";
import * as scheduleActions from '../actions/ScheduleActions'
import ReactDataGrid from 'react-data-grid';
import Immutable from 'immutable';
import ScheduleColumn from './ScheduleColumn'
import TimeColumn from './TimeColumn'
const Schedule = (props) => {


	return (
		<div className="Schedule">
			<TimeColumn name="Time" />
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
	})
)(Schedule)
