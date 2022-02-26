import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDego7-9AnTYiiCk1HzHNatEpvP_fQY9ks",
    authDomain: "olx-clone-cb8e8.firebaseapp.com",
    projectId: "olx-clone-cb8e8",
    storageBucket: "olx-clone-cb8e8.appspot.com",
    messagingSenderId: "1001075312806",
    appId: "1:1001075312806:web:7e23f7ae1fe3e0b75f8c67",
    measurementId: "G-WYTV2RZF9C"
  };
  export default firebase.initializeApp(firebaseConfig)