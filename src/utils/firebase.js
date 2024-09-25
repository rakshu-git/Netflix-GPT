// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYuVnX_D3GTa2pUKJiDdRGFyC469WBJwo",
  authDomain: "netflixgpt-60a21.firebaseapp.com",
  projectId: "netflixgpt-60a21",
  storageBucket: "netflixgpt-60a21.appspot.com",
  messagingSenderId: "58635079591",
  appId: "1:58635079591:web:8e245e14ed3d284f09b082",
  measurementId: "G-P8K8SZ8T86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();