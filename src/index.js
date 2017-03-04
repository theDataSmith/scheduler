import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import initStore from './store/CreateStore'
import { Provider } from 'react-redux';
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux'




const store  = initStore;
const history = syncHistoryWithStore(browserHistory, store);


const Routes =
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}/>
		</Router>
</Provider>;




ReactDOM.render(Routes, document.getElementById('root'));
