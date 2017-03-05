/**
 * Created by Gmaddog2020 on 3/4/17.
 */

import React from 'react';
import {connect} from "react-redux";
import * as sideBarActions from '../actions/SideBarActions';

class SideBar extends React.Component
{
	
	constructor(props){
		super(props);
		
		this.state = {value: ''};
		
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSubmitSearch = this.onSubmitSearch.bind(this);
	}
	
	onSearchChange(event)
	{
		this.setState({value: event.target.value});
	}
	
	onSubmitSearch(event)
	{
		console.dir(this.state.value);
		event.preventDefault();
		this.props.submitSearch(this.state.value);
		this.state.value = '';
		return false;
	}
	
    render()
	{
        return(
            <div className="SideBar">
				<div className="SideBySide">
					<img src="./assets/icons/search.png" className="SearchIcon"/>
					
					<form onSubmit={(event) => this.onSubmitSearch(event)}>
						<input className="SearchBar"
							   type="text"
							   value={this.state.value}
							   onChange={this.onSearchChange}
							   placeholder="Course Name"
						/>
					</form>
				</div>
				{
					this.props.courses.map((course) =>
						<text>{course}</text>
					)
				}
            </div>
        )
    }
}

export default connect(
	(state) => ({
		courses: state.sideBar.courses,
	}),
	(dispatch) => ({
		submitSearch: (course) => dispatch(sideBarActions.addCourseToSideBar(course))
	})
)(SideBar)
