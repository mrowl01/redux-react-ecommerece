import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAu1I8Y2u-UOect4gJ23IHy1WW7jI9-HwA",
    authDomain: "commerce-a94ad.firebaseapp.com",
    databaseURL: "https://commerce-a94ad.firebaseio.com",
    projectId: "commerce-a94ad",
    storageBucket: "commerce-a94ad.appspot.com",
    messagingSenderId: "690361337544",
    appId: "1:690361337544:web:ad510297f88e049f7a87fd",
    measurementId: "G-6CX58FXKMN"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;