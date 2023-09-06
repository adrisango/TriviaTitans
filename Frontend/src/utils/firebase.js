import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig1 = {
  apiKey: process.env.REACT_APP_API_KEY_1,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_1,
  projectId: process.env.REACT_APP_PROJECT_ID_1,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_1,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_1,
  appId: process.env.REACT_APP_APP_ID_1,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID_1,
};

const firebaseConfig2 = {
  apiKey: process.env.REACT_APP_API_KEY_2,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_2,
  databaseURL: process.env.REACT_APP_DATABASE_URL_2,
  projectId: process.env.REACT_APP_PROJECT_ID_2,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_2,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_2,
  appId: process.env.REACT_APP_APP_ID_2,
};

export const app1 = initializeApp(firebaseConfig1);
export const app2 = initializeApp(firebaseConfig2, "app2");

export const auth = getAuth(app1);
export const db = getFirestore(app2);
