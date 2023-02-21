// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATEZYWVhpi5osnsOmTpJl85RoILx2HceA",
  authDomain: "zing-mp3-162a1.firebaseapp.com",
  projectId: "zing-mp3-162a1",
  storageBucket: "zing-mp3-162a1.appspot.com",
  messagingSenderId: "584719942692",
  appId: "1:584719942692:web:4b33b1bacd485adeb004b1",
  measurementId: "G-VJW3GCMYL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);