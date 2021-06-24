import React from 'react';

import firebase from '../firebase';class Update extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : '',
			price : '',
			specifications : '',
            image: '',
			key:''
		}
	}

	render(){
		return(
				<div className="container">
					<form onSubmit = {this.onFormSubmit}>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			);
	}

}

export default Update;
