// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDv1GhJRvTtkbpIOZL6tuEFAq94FDVfeGM",
  authDomain: "clone-b1962.firebaseapp.com",
  projectId: "clone-b1962",
  storageBucket: "clone-b1962.appspot.com",
  messagingSenderId: "891819061337",
  appId: "1:891819061337:web:6474ef82fc716cc5fcc148",
  measurementId: "G-ZK8NWE2QKJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);;

   const auth = firebase.auth();
   const db = firebaseApp.firestore()

  export { db,auth };
