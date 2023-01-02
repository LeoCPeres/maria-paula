// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHoO3NKpQ88b4Ja7KFgZZWeNjYPCGlWXg",
  authDomain: "stitch-d4402.firebaseapp.com",
  projectId: "stitch-d4402",
  storageBucket: "stitch-d4402.appspot.com",
  messagingSenderId: "1045341968516",
  appId: "1:1045341968516:web:e0669b543360245ff58ad1",
  measurementId: "G-RVZ16HGDRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
