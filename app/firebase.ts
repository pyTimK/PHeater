// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUfDaKfkeNghy1umjiG7IEFWK5ZPT-8x4",
  authDomain: "heater-26bf7.firebaseapp.com",
  databaseURL:
    "https://heater-26bf7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "heater-26bf7",
  storageBucket: "heater-26bf7.appspot.com",
  messagingSenderId: "837275683695",
  appId: "1:837275683695:web:ebeec85ed175ac1684f69a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
