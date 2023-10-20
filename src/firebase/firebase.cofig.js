// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnGCsW-8CdqxSZcYCiGDWFJqeJH-PQkJI",
  authDomain: "dragon-news-19f6d.firebaseapp.com",
  projectId: "dragon-news-19f6d",
  storageBucket: "dragon-news-19f6d.appspot.com",
  messagingSenderId: "204448469172",
  appId: "1:204448469172:web:96d6e9b90798c3285687e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;