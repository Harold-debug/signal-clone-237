import firebase from 'firebase/app'

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBCrKZK4JPQdZ0Cfw6mqvYuEpHqijy_wUE",
  authDomain: "signal-clone-51dde.firebaseapp.com",
  projectId: "signal-clone-51dde",
  storageBucket: "signal-clone-51dde.appspot.com",
  messagingSenderId: "104913797004",
  appId: "1:104913797004:web:9819172552138a659820a9"
};

 let app;

 if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);

 }
 else {
     app = firebase.app();
 }

 const db = app.firestore();
 const auth = firebase.auth();

 export {db, auth};

