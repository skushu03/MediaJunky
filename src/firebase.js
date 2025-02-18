// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4CFQNISnw4zG_prE2rB6QMyoADZ4JE0k",
  authDomain: "media-junky-284c4.firebaseapp.com",
  projectId: "media-junky-284c4",
  storageBucket: "media-junky-284c4.firebasestorage.app",
  messagingSenderId: "555210799945",
  appId: "1:555210799945:web:d32c1fd5ad3cb2bd24f898",
  measurementId: "G-FLZ7R5HCVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { auth, db };
