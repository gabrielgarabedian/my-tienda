// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpN5TFsLXkIKsJltB0qW7CfxYGQkdq2Bs",
  authDomain: "comic-tienda.firebaseapp.com",
  projectId: "comic-tienda",
  storageBucket: "comic-tienda.appspot.com",
  messagingSenderId: "905354975190",
  appId: "1:905354975190:web:effe5648e36f45415bf677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);