import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHhukasHHQjFBd37642fmi41jGuVTlPWI",
  authDomain: "clone-fc1b2.firebaseapp.com",
  projectId: "clone-fc1b2",
  storageBucket: "clone-fc1b2.appspot.com",
  messagingSenderId: "189737169827",
  appId: "1:189737169827:web:9d4618d7871634cf7fe016",
  measurementId: "G-Y951Z8EP7S",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();

export default db;
