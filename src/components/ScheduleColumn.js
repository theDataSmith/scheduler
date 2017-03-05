/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'
import {connect} from "react-redux";
import Immutable from "immutable";
import ScheduleCell from './ScheduleCell'
const ScheduleColumn = (props) => {


	const content = Immutable.fromJS(props.currentSchedule)
		.get(props.name)
		.get('Content');

	console.log(content);

	if(props.name === "Time"){
		return (
			<div className="Schedule-Column">
				<text>
					{props.name}
				</text>
				{
					content.map((item) =>
						<ScheduleCell item={item} />
					)
				}
			</div>
		);
	}

	return (
		<div className="Schedule-Column">
			<text>
				{props.name}
			</text>
			{
				content.map((item) =>
					<ScheduleCell item={item} isActivated={false} />
				)
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

