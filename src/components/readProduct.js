import React from 'react';

import firebase from '../firebase';
import { Card } from 'react-bootstrap';


class Read extends React.Component {

    state = {
        name: '',
        price: '',
        specifications: '',
        image:'',
        key: ''
    }

    componentDidMount = () => {
        const ref = firebase.firestore().collection('laptops').doc(this.props.match.params.id);
        ref.get()
            .then(doc => {
                if (doc.exists) {
                    this.setState({
                        name: doc.data().name,
                        price: doc.data().price,
                        specifications: doc.data().specifications,
                        image: doc.data().image,                    
                        key: doc.id
                    });
                } else {
                    console.log("There was error in finding the document");
                }

            })
            .catch(err => console.log("There was some error in getting the document."));
    }

    render() {
        return (
            <div className="container">
                <Card style={{ width: '65rem', margin: "25px", padding: "50px" }}>
                    <Card.Img variant="top" src={this.state.image} style={{width:"30rem"}} />
                    <h1 className="card-name">{this.state.name}</h1>
                    <h4 className="card-subname mb-2 text-muted">Price: {this.state.price}</h4>
                    <b>Specifications:</b>
                    <p className="card-text">{this.state.specifications}</p>
                </Card>


            </div>
        );
    }
}

export default Read;