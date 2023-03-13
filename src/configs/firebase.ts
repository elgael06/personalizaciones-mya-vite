// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAE7E7yD_4pHBOxwOIwB1P5efkQBB1HtM",
  authDomain: "personalizaciones-mya.firebaseapp.com",
  projectId: "personalizaciones-mya",
  storageBucket: "personalizaciones-mya.appspot.com",
  messagingSenderId: "909775641603",
  appId: "1:909775641603:web:2ce0f67ba6c89cd60bc236",
  measurementId: "G-MN9W8TGL6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);