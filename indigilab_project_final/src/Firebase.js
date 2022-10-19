// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-BpbWGIcrVCZjeIrZWr7lLGgegQgtGEY",
  authDomain: "indigitalproject-6b20e.firebaseapp.com",
  projectId: "indigitalproject-6b20e",
  storageBucket: "indigitalproject-6b20e.appspot.com",
  messagingSenderId: "943704553234",
  appId: "1:943704553234:web:29a6149ba8efb9023f65cb",
  measurementId: "G-33THHNH43H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);