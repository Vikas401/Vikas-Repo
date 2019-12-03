import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyDUQPtt3K7Wq6kLadxi7SkLRxwrD0Kx8Fc",
  authDomain: "g-commerse.firebaseapp.com",
  databaseURL: "https://g-commerse.firebaseio.com",
  projectId: "g-commerse",
  storageBucket: "g-commerse.appspot.com",
  messagingSenderId: "749970088543",
  appId: "1:749970088543:web:981b38cfe1e98f545eb1ea",
  measurementId: "G-2G6P3K6FWH"
};
   export const createUserProfileDocument = async (userAuth, additionalData) => {
     if (!userAuth) return;
     
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();
     
     if(!snapShot.exists){
       const { displayName, email} = userAuth;

       const createAt = new Date();

       try{
         await userRef.set({
           displayName,
           email,
           createAt,
           ...additionalData
         })

       }catch(error){
          
        console.log('error create user' ,error.message);
       }
     }
     return userRef;
   };
 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

