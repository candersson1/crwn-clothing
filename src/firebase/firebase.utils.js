import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBr_V6oBRyY5Qzh8wf6XDC_y_ByQEo2bfE",
    authDomain: "crwn-db-b8991.firebaseapp.com",
    databaseURL: "https://crwn-db-b8991.firebaseio.com",
    projectId: "crwn-db-b8991",
    storageBucket: "",
    messagingSenderId: "983518631641",
    appId: "1:983518631641:web:26b6d568709818e5cd10c8"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


