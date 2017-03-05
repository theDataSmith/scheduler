/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'
import {connect} from "react-redux";
import * as scheduleActions from '../actions/ScheduleActions'


const Header = (props) => {
	return (
		<div className="Header">
			<div>
				<text className="title">
					Schedule Builder
				</text>
				<button onClick={() => props.clickTabs()}>
					custom thing
				</button>
				<button onClick={() => 	props.onStart()}>
					print
				</button>
				<button onClick={() => {}}>
					export
				</button>
			</div>
		</div>
	);
};

export default connect(
	(state) => ({
	}),
	(dispatch) => ({
		clickTabs: () => dispatch(scheduleActions.addToSchedule("clapton")),
		onStart: () => dispatch(scheduleActions.runTest())

	})
)(Header)
