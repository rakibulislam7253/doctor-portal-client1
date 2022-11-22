// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDpIiU52nuYoGYOyu-Ugl5UDuhY0eOy2eg",
  authDomain: "doctor-portal-e4247.firebaseapp.com",
  projectId: "doctor-portal-e4247",
  storageBucket: "doctor-portal-e4247.appspot.com",
  messagingSenderId: "662838323809",
  appId:"1:662838323809:web:74340fca5d436b86b31820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;