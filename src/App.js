import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import firebase from './firebase.js'

class App extends React.Component{
	// return(<div>I am at your service,sir ...</div>);
	constructor(props){
		super(props);
		this.ref = firebase.firestore().collection('laptops');
		this.unsubscribe = null;
		this.state = {laptops : []};
	}

	onCollectionUpdate = (querySnapshot) => {
		const laptops = [];
		querySnapshot.forEach((doc) => {
			const {name,price,specifications, image} = doc.data();
			laptops.push({
				key:doc.id,
				name,
				price,
				specifications,
				image
			});
		});
		this.setState({laptops});
	}

	componentDidMount = () => {
		this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
	}

	delete = (id) => {
		// console.log(id);
		const delRef = firebase.firestore().collection('laptops').doc(id);
		delRef.delete()
		.then( () => console.log("deleted a laptop"))
		.catch(err => console.log("There is some error in updating!"));
	}

	getLaptops = () => {
		const foundLaptops = this.state.laptops.map((laptop) => {
			return(
				<div key={laptop.key}>
					<div>
            <image src={laptop.image} alt="laptop image"></image>
						<Link to={`/read/${laptop.key}`}><h3>{laptop.name}</h3></Link>
						<h6>-{laptop.price}</h6>
						<p>{laptop.specifications.substr(0,150)}...</p>
						<Link to = {`/read/${laptop.key}`}><button style = {{margin:'3px'}} className="btn btn-primary">Show</button></Link>
						<Link to = {`/update/${laptop.key}`}><button style = {{margin:'3px'}} className="btn btn-warning">Edit</button></Link>
						<button style = {{margin:'3px'}} onClick={() => this.delete(laptop.key)} className="btn btn-danger">Delete</button>
					</div>
				</div>
				);
		});		

		return foundLaptops;
	}

	render = () => {
		return(
			<div className = 'container'>
				<h1>Wanna Buy a Laptop?<span role="img" aria-label="emoji">😉🐱‍🏍</span></h1>
				<Link to="/create"><button style = {{margin:'3px'}} className="btn btn-primary btn-lg btn-block">Add product</button></Link>
				<br/>
				<div className = "row">
					{this.getLaptops()}
				</div>
			</div>
			);
	}
}

export default App;








