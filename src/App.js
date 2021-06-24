import React from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase.js'
import { Card, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { faTrash, faEdit, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css'

class App extends React.Component {
	// return(<div>I am at your service,sir ...</div>);
	constructor(props) {
		super(props);
		this.ref = firebase.firestore().collection('laptops');
		this.unsubscribe = null;
		this.state = { laptops: [], checkedBoxes: [] };
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
		this.deleteProducts = this.deleteProducts.bind(this);
		this.onCollectionUpdate = this.onCollectionUpdate.bind(this);
	}
	toggleCheckbox = (e, laptop) => {
		if (e.target.checked) {
			let arr = this.state.checkedBoxes;
			arr.push(laptop.key);
			this.setState = { checkedBoxes: arr };
		} else {
			let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(laptop.key), 1);
			this.setState = ({
				checkedBoxes: items
			})
		}
		// console.log(this.state.checkedBoxes);
	}

	deleteProducts = () => {
		const ids = this.state.checkedBoxes;
		ids.forEach((id) => {
			// console.log(id)
			const delRef = firebase.firestore().collection('laptops').doc(id);
			delRef.delete()
				.then(() => {
					window.location.reload();
					console.log("deleted a laptop")
				})
				.catch(err => console.log("There is some error in updating!"));
		})
	}

	delete = (id) => {
		// console.log(id);
		const delRef = firebase.firestore().collection('laptops').doc(id);
		delRef.delete()
			.then(() => {
				console.log("deleted a laptop")
			})
			.catch(err => console.log("There is some error in updating!"));
	}

	onCollectionUpdate = (querySnapshot) => {
		const laptops = [];
		querySnapshot.forEach((doc) => {
			const { name, price, specifications, image } = doc.data();
			laptops.push({
				key: doc.id,
				name,
				price,
				specifications,
				image
			});
		});
		this.setState({ laptops });
		console.log(this)
	}

	componentDidMount = () => {
		this.ref.onSnapshot(this.onCollectionUpdate);
	}

	getLaptops = () => {
		const foundLaptops = this.state.laptops.map((laptop) => {
			return (
				<div key={laptop.key}>
					<div>
						<Container>
							<Card style={{ width: '18rem', margin: "25px" }} className="cardclass">
								<input type="checkbox" className="selectsingle" value="{laptop.key}" checked={this.state.checkedBoxes.find((p) => p.key === laptop.key)} onChange={(e) => this.toggleCheckbox(e, laptop)} />


								<Link to={`/update/${laptop.key}`}><Button className="edit"><FontAwesomeIcon icon={faEdit} /></Button></Link>
								<Card.Img variant="top" src={laptop.image} className="cardimg" />
								<Card.Body>
									<Link to={`/read/${laptop.key}`}><Card.Title className="title">{laptop.name}</Card.Title></Link>
									<h6>Price: {laptop.price} <FontAwesomeIcon icon={faRupeeSign} /></h6>

									<Card.Text>
										{laptop.specifications.substr(0, 150)}...
									</Card.Text>
									<Link to={`/read/${laptop.key}`}><Button className="btn1">Show</Button></Link>
									<Button className="delete" onClick={() => this.delete(laptop.key)}><FontAwesomeIcon icon={faTrash} /></Button>
								</Card.Body>
							</Card>
						</Container>
					</div>
				</div>
			);
		});

		return foundLaptops;
	}

	render = () => {
		return (
			<div>
				<Navbar className="navbar">
					<Container>
						<Navbar.Brand href="#home">Laptop Shopping</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/create">Add product</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<br />
				<button type="button" onClick={this.deleteProducts}>Delete Selected Product(s)</button>
				<div className="row">
					{this.getLaptops()}
				</div>
			</div>
		);
	}
}

export default App;













