/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'
import {connect} from "react-redux";

const SchedulerCell = (props) => {

	return (
		<div className="Schedule-Cell">
			<text>
				{props.item}
			</text>
		</div>
	)
};



export default connect(
	(state) => ({
	}),
	(dispatch) => ({
	})
)(SchedulerCell)
