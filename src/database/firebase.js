
import firebase from 'firebase';
  
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyD1h7O3OgDiHxlhdWJHw-l9TfALeTj4GVE",
  authDomain: "develcode-crud.firebaseapp.com",
  databaseURL: "https://develcode-crud-default-rtdb.firebaseio.com",
  projectId: "develcode-crud",
  storageBucket: "develcode-crud.appspot.com",
  messagingSenderId: "92969027343",
  appId: "1:92969027343:web:8c671cf5517b2fd14d207a"
};
  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()
