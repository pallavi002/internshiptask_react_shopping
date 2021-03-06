import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Update from './components/updateProduct'
import Create from './components/addProduct'
import Read from './components/readProduct'

ReactDOM.render(
	<Router>
		<div>
			<Route exact path = '/' component={App} />
			<Route exact path = '/update/:id' component={Update} />
			<Route exact path = '/read/:id' component={Read} />
			<Route exact path = '/create' component={Create} />
		</div>
	</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
