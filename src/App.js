import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import firebase from './firebase.js'
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { faTrash, faEdit, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css'

class App extends React.Component {
	// return(<div>I am at your service,sir ...</div>);
	constructor(props) {
		super(props);
		this.ref = firebase.firestore().collection('laptops');
		this.unsubscribe = null;
		this.state = { laptops: [] };
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
		console.log(laptops)

	}

	componentDidMount = () => {
		this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
	}

	delete = (id) => {
		// console.log(id);
		const delRef = firebase.firestore().collection('laptops').doc(id);
		delRef.delete()
			.then(() => console.log("deleted a laptop"))
			.catch(err => console.log("There is some error in updating!"));
	}

	getLaptops = () => {
		const foundLaptops = this.state.laptops.map((laptop) => {
			return (
				<div key={laptop.key}>
					<div>
						<Container>
							<Card style={{ width: '18rem', margin: "25px" }} className="cardclass">
							<Link to={`/update/${laptop.key}`}><Button className="edit"><FontAwesomeIcon icon={faEdit} /></Button></Link>
								<Card.Img variant="top" src={laptop.image} class="cardimg" />
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
			<div style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1523878288860-7ad281611901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"})`, backgroundSize:"cover"}}>
				<Navbar class="navbar">
					<Container>
						<Navbar.Brand href="#home">Laptop Shopping</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/create">Add product</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<br />
				<div className="row">
					{this.getLaptops()}
				</div>
			</div>
		);
	}
}

export default App;








