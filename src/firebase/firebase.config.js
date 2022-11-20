// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACR_APPapiKey,
  authDomain: process.env.REACR_APPauthDomain,
  projectId: process.env.REACR_APPprojectId,
  storageBucket: process.env.REACR_APPstorageBucket,
  messagingSenderId: process.env.REACR_APPmessagingSenderId,
  appId: process.env.REACR_APPappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;