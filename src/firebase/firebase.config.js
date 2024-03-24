// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrykofSpV65Bv-3XdQwSCtTPbcMxdYrHk",
  authDomain: "sustainability-guide-project.firebaseapp.com",
  projectId: "sustainability-guide-project",
  storageBucket: "sustainability-guide-project.appspot.com",
  messagingSenderId: "24441064178",
  appId: "1:24441064178:web:7cf97f08d055a0a3df5e6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;