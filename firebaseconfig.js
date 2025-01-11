// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN7_2roj7Zf6Snj0D05qfy7wQ8dfwteaM",
  authDomain: "sanzuma-9e50e.firebaseapp.com",
  projectId: "sanzuma-9e50e",
  storageBucket: "sanzuma-9e50e.firebasestorage.app",
  messagingSenderId: "771789214740",
  appId: "1:771789214740:web:5507ec44acc6a0fa2ac301",
  measurementId: "G-4L4FB4SX8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);