import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
export const firebaseConfig={
    apiKey: "AIzaSyAHHd8u_Z8IAxhiObDccG2NUxzzF-IAbDg",
    authDomain: "numberauth-2b5db.firebaseapp.com",
    projectId: "numberauth-2b5db",
    storageBucket: "numberauth-2b5db.appspot.com",
    messagingSenderId: "64491150205",
    appId: "1:64491150205:web:65d6b08cab7f2be87d0a14",
    measurementId: "G-3LGEBQKP3D"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }