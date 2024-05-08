import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBWDF6633tyhiHlkVtUt6F5x8PF5O1a7Q4",
  authDomain: "paf-10ace.firebaseapp.com",
  projectId: "paf-10ace",
  storageBucket: "paf-10ace.appspot.com",
  messagingSenderId: "578189518870",
  appId: "1:578189518870:web:8075f95cd89e16e1872d37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
