import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz6dJ1HzUeOm28LxVt_geo3-cjwOxxiGU",
  authDomain: "cognitiveinterviews-c33f7.firebaseapp.com",
  projectId: "cognitiveinterviews-c33f7",
  storageBucket: "cognitiveinterviews-c33f7.firebasestorage.app",
  messagingSenderId: "634703934700",
  appId: "1:634703934700:web:af3fc2122b4c9105e4a1c9",
  measurementId: "G-C5DLC1BKB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
