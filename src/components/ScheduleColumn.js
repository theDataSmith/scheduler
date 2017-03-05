/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'
import {connect} from "react-redux";
import Immutable from "immutable";
import ScheduleCell from './ScheduleCell'
const ScheduleColumn = (props) => {

	//content is a Immutable List
	const content = props.currentSchedule
		.get(props.name)
		.get('Content');

	// console.dir(content.toJS());


	return (
		<div className="Schedule-Column">
			<text>
				{props.name}
			</text>
			{
				content.toSeq().map((value) => {
					return(
						<ScheduleCell glarp={value} key={value}/>
					)
				})
			}
		</div>
	);
};
export default connect(
	(state) => ({
		currentSchedule : state.schedule.schedule
	}),
	(dispatch) => ({

	})
)(ScheduleColumn)

