import firebase from 'firebase/app';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvDqE5H_IJyc6wGxPBh4JEoIn43y7sbwk",
    authDomain: "internship-shopping.firebaseapp.com",
    projectId: "internship-shopping",
    storageBucket: "internship-shopping.appspot.com",
    messagingSenderId: "13772036395",
    appId: "1:13772036395:web:e2798d996526637a328d6e",
    measurementId: "G-ZEN05YFMW7"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;