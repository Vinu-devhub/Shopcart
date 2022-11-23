// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi3EZliJCOMwZrotuHjEO6GqdiJKmPFjw",
  authDomain: "shopcart-5ce0b.firebaseapp.com",
  projectId: "shopcart-5ce0b",
  storageBucket: "shopcart-5ce0b.appspot.com",
  messagingSenderId: "671067873019",
  appId: "1:671067873019:web:9baa01f12b2b60ef215a5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
