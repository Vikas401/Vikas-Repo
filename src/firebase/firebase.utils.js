import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDBH0uyIZd-vpisYycZHM7qsLA9_61_TPs",
    authDomain: "vcommers-fb25b.firebaseapp.com",
    databaseURL: "https://vcommers-fb25b.firebaseio.com",
    projectId: "vcommers-fb25b",
    storageBucket: "vcommers-fb25b.appspot.com",
    messagingSenderId: "837673801300",
    appId: "1:837673801300:web:1c17f4094fdf5b3d5fbfc1",
    measurementId: "G-WFRS9EH25D"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

