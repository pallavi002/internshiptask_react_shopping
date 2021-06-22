import React from 'react';

import firebase from '../firebase';

class Update extends React.Component{
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
	

	onFormSubmit = (event) =>{
		event.preventDefault();
		const {name, price, specifications, image} = this.state;
		const ref = firebase.firestore().collection('laptops').doc(this.props.match.params.id);
		ref.set({
			name,
			price,
			specifications,
            image
		})
		.then((upadatedPost) => {
			this.setState({
			name : '',
			price  : '',
			specifications : ''
			});
			this.props.history.push("/");
		})	
		.catch(err => {
			console.log("There is some error in updating post!")
		
		});
	}

	onInputChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state);
		// console.log(state);
	}

	componentDidMount = () =>{
		const ref = firebase.firestore().collection('laptops').doc(this.props.match.params.id);
		// console.log(this.props);
		ref.get().then((doc) => {
			if(doc.exists){
				this.setState({
					name : doc.data().name,
					price : doc.data().price,
					specifications : doc.data().specifications,
					key : doc.id,
					isLoading : false
				});
			}else{
				console.log("No such document found");
			}
		})
		.catch(err => console.log("there was some error finding the document")); 
	}



	render(){
		return(
				<div className="container">
					<h1>Update document</h1>
					<form onSubmit = {this.onFormSubmit}>
						<div className="form-group">
						    <label forhtml="name">name</label>
						    <input onChange={this.onInputChange} type="text" className="form-control" id="name" placeholder="name" name="name" value={this.state.name}/>
						</div>

						<div className="form-group">
						    <label forhtml="price">price</label>
						    <input onChange={this.onInputChange} type="text" className="form-control" id="price" placeholder="price" name="price" value={this.state.price}/>
						</div>

						<div className="form-group">
						    <label forhtml="specifications">specifications</label>
						    <input onChange={this.onInputChange} type="text" className="form-control" id="specifications" placeholder="What's on your mind?" name="specifications" value={this.state.specifications}/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			);
	}

}

export default Update;

