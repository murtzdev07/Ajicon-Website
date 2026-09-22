import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Replace these with the keys Google gives you in Step 3 above
const firebaseConfig = {
    apiKey: "AIzaSyBezWuHZdUnwDrSeSKMtGU54uBnCZS1cpM",
  authDomain: "ajicon-b3765.firebaseapp.com",
  projectId: "ajicon-b3765",
  storageBucket: "ajicon-b3765.firebasestorage.app",
  messagingSenderId: "875532405339",
  appId: "1:875532405339:web:a2fc3e4f61759c81e48d7e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);