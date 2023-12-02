import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSViRKBPsLqVxtpovdC5RXfQ_IQZmK5b4",

  authDomain: "book-2a279.firebaseapp.com",

  projectId: "book-2a279",

  storageBucket: "book-2a279.appspot.com",

  messagingSenderId: "1084613960426",

  appId: "1:1084613960426:web:844d9cbe6e432f3cd02d93"

  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export { firebase };