import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBTTVd3enSSVbZLq2YC-__DSBax_mVb68",
  authDomain: "clone-15367.firebaseapp.com",
  databaseURL: "https://clone-15367.firebaseio.com",
  projectId: "clone-15367",
  storageBucket: "clone-15367.appspot.com",
  messagingSenderId: "312506104108",
  appId: "1:312506104108:web:ed443c1571c883c8c29489",
  measurementId: "G-8GQBPD3WYY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db ,auth };