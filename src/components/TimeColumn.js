/**
 * Created by drunkengranite on 3/4/17.
 */
import React from 'react'


const TimeColumn = (props) => {



	const content = ["6am","7am","8am","9am","10am","11am","12pm", "1pm",
		"2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm"];
	return (
		<div className="Schedule-Column">
			<text>
				{props.name}
			</text>
			{
				content.map((time) =>
					<div key={time} className="Time-Cell">
						<text>
							{time}
						</text>
					</div>
				)
			}
		</div>
	);
};


export default TimeColumn;