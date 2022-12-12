import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjf-RV0h-CI3lBVyDv55Yoncsx4_PgZ9o",
  authDomain: "web-app-4da77.firebaseapp.com",
  projectId: "web-app-4da77",
  storageBucket: "web-app-4da77.appspot.com",
  messagingSenderId: "978198576438",
  appId: "1:978198576438:web:1ec3f3ff1b211ae14c8797",
  measurementId: "G-EDKF35E1D4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export { db, auth, provider };