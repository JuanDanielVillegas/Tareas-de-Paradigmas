import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDJWEa8i3Iv4oatjLPZQzHVdsz9cCaCH-A",
    authDomain: "vue-todo-ee0d0.firebaseapp.com",
    projectId: "vue-todo-ee0d0",
    storageBucket: "vue-todo-ee0d0.appspot.com",
    messagingSenderId: "980190000994",
    appId: "1:980190000994:web:1ba7957944682761e8de3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()