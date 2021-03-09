import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyACpEL3safGL4S4AlrBfzl6-pMYPhWBgTA",
    authDomain: "coderhouse-ecommerce-6213c.firebaseapp.com",
    projectId: "coderhouse-ecommerce-6213c",
    storageBucket: "coderhouse-ecommerce-6213c.appspot.com",
    messagingSenderId: "216329718157",
    appId: "1:216329718157:web:cb5894ce90376cbff3d5c4"
  });

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}