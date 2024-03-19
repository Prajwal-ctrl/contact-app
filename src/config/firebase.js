// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0DXG-Gz5iEI7j-NSZyuP_S7mn4ddNJkw",
  authDomain: "vite-contact-dce01.firebaseapp.com",
  projectId: "vite-contact-dce01",
  storageBucket: "vite-contact-dce01.appspot.com",
  messagingSenderId: "39483245811",
  appId: "1:39483245811:web:c9828b3f9e50e2ee15e386"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

