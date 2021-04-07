import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA_pgeFWD8dUkn_jzj8M4ZIwADhFe4YYOg",
  authDomain: "netflix-clone-362d0.firebaseapp.com",
  projectId: "netflix-clone-362d0",
  storageBucket: "netflix-clone-362d0.appspot.com",
  messagingSenderId: "330964819363",
  appId: "1:330964819363:web:7b8962e47af5cb3b648e16",
  measurementId: "G-FRHM8BZRTS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth }
export default db;