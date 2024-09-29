// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebase_key  = process.env.REACT_APP_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: firebase_key,
  authDomain: "kanban-react-d00dd.firebaseapp.com",
  projectId: "kanban-react-d00dd",
  storageBucket: "kanban-react-d00dd.appspot.com",
  messagingSenderId: "190933427986",
  appId: "1:190933427986:web:74cf61f2143869375c75cb",
  measurementId: "G-554TZTX6X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);