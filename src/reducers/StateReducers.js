/**
 * Created by drunkengranite on 3/4/17.
 */
import {handleActions} from 'redux-actions'
import {
	TEST
}from
	'../constants/constants'



let initialState = {
	penis : 1
};



const StateReducer = handleActions({

	[TEST]: (state, action) => {
		return {
			...state,
		}
	},

}, initialState);

export default StateReducer;