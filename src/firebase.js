import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeq4AwFIofERoJPjygsrUqWcAeERxSLWA",
  authDomain: "clone-d9184.firebaseapp.com",
  databaseURL: "https://clone-d9184.firebaseio.com",
  projectId: "clone-d9184",
  storageBucket: "clone-d9184.appspot.com",
  messagingSenderId: "572916068567",
  appId: "1:572916068567:web:e842c8c033ae4189e68092",
  measurementId: "G-P26C7NM28Y",
});

const auth = firebase.auth();

export { auth };
