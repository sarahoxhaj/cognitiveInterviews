import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA7thATzEeCG_UsNo4G4vt3jL8q9uTz_5Q",
  authDomain: "survey2-5ddd4.firebaseapp.com",
  projectId: "survey2-5ddd4",
  storageBucket: "survey2-5ddd4.firebasestorage.app",
  messagingSenderId: "230088701738",
  appId: "1:230088701738:web:fe92418cd70c966e8fd053",
  measurementId: "G-W3FNNY6SWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);