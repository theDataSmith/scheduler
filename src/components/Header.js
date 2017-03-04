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
					{
						props.currentGlarp ?
							props.currentGlarp
							:
							"Glarp not exist"
					}
				</text>
				<button onClick={() => props.clickTabs()}>
					custom thing
				</button>
				<button onClick={() => {}}>
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
		currentGlarp : state.schedule.glarp
	}),
	(dispatch) => ({
		clickTabs: () => dispatch(scheduleActions.addToSchedule("clapton"))
	})
)(Header)
