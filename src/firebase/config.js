// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKJJr3_WBVrrF2hyAA-k3uiq0s26n6p8E",
  authDomain: "mascaraswebsite.firebaseapp.com",
  projectId: "mascaraswebsite",
  storageBucket: "mascaraswebsite.appspot.com",
  messagingSenderId: "634494222531",
  appId: "1:634494222531:web:613bcc859822939ce32276",
  measurementId: "G-YHFGBH65EF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);
