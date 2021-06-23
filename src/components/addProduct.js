import React from 'react';

import firebase from '../firebase';

//some error regarding rendering

class Create extends React.Component{
	constructor(){
		super();
		this.ref = firebase.firestore().collection('laptops');
		this.state = {
			name : '',
			price  : '',
			specifications : ''
		};
	}

	onFormSubmit = (event) =>{
		event.preventDefault();
		const {name, price, specifications} = this.state;
		this.ref.add({
			name,
			price,
			specifications
		})
		.then((newPost) => {
			this.setState({
			name : '',
			price  : '',
			specifications : ''
			});
			this.props.history.push("/");
		})	
		.catch(err => {
			console.log("There is some error in adding a new post!")
		
		});
	}

	onInputChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state);
	}

	componentDidMount = () => {
		this.setState({
			name : '',
			price  : '',
			specifications : ''
			});
	}

	render(){
		return(
			<div className="container">
				<h1>Add Product</h1>
				<form onSubmit = {this.onFormSubmit}>
					<div className="form-group">
					    <label forhtml="name">name</label>
					    <input onChange={this.onInputChange} type="text" className="form-control" id="name" placeholder="name" name="name"/>
					</div>

					<div className="form-group">
					    <label forhtml="price">price</label>
					    <input onChange={this.onInputChange} type="text" className="form-control" id="price" placeholder="price" name="price"/>
					</div>

					<div className="form-group">
					    <label forhtml="specifications">specifications</label>
					    <input onChange={this.onInputChange} type="text" className="form-control" id="specifications" placeholder="Specifications" name="specifications"/>
					</div>
          
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
			);
		
	}
}

export default Create;



