// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN2mTWRcdkjMpwq37j6QJItoR9hAp2IxM",
  authDomain: "artify-cc3af.firebaseapp.com",
  projectId: "artify-cc3af",
  storageBucket: "artify-cc3af.firebasestorage.app",
  messagingSenderId: "674241204035",
  appId: "1:674241204035:web:8e99f6787d07f65b6c69f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);