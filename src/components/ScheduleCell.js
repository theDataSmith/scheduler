/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'
import {connect} from "react-redux";
import * as scheduleActions from '../actions/ScheduleActions'
const SchedulerCell = (props) => {



	if (Number.isInteger(props.glarp)){
		return (
			<div className="Schedule-Cell"/>
		)
	}else{
		//dont ask, magic
		const inLineStyle = {
			background: 'red',
			flex: props.glarp.get('time'),
			paddingBottom: (props.glarp.get('time') -1) * 2 +'px' ,
			borderBottom: '2px white solid',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'white'
		};

		return (
			<div style={inLineStyle}>
				<text>
					{props.glarp.get('name')}
				</text>
				<button onClick={() => props.removeTab(props.glarp)}>
					remove me
				</button>
			</div>
		)
	}



};



export default connect(
	(state) => ({

	}),
	(dispatch) => ({
		removeTab: (tab) => dispatch(scheduleActions.removeFromSchedule(tab))
	})
)(SchedulerCell)
