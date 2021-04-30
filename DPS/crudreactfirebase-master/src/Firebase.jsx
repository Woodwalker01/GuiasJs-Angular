import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdWe4RaYuuTlRUgi0GAlbFWYem7dV7iUI",
    authDomain: "reactcrudfirebase-73847.firebaseapp.com",
    databaseURL: "https://reactcrudfirebase-73847.firebaseio.com",
    projectId: "reactcrudfirebase-73847",
    storageBucket: "reactcrudfirebase-73847.appspot.com",
    messagingSenderId: "783525311206",
    appId: "1:783525311206:web:81038ac7bb061f53f08127"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();

