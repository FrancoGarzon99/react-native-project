import firebase from "firebase";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDoGneR5vUAd5cmMnmz03IsD3G8yVDO9CM",
  authDomain: "reactnativeproyect.firebaseapp.com",
  projectId: "reactnativeproyect",
  storageBucket: "reactnativeproyect.appspot.com",
  messagingSenderId: "192529511709",
  appId: "1:192529511709:web:c2b14ff309c5a457d7ddf4",
  measurementId: "G-EZ51HZ16K5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

export default {
  firebase,
  db,
};
