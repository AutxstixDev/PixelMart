// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRBX_i6k1LPaJ2qUotOZWq5ZOdJg_sZx8",
  authDomain: "pixelmart-96412.firebaseapp.com",
  projectId: "pixelmart-96412",
  storageBucket: "pixelmart-96412.appspot.com", // ✅ Fixed this line
  messagingSenderId: "841887218289",
  appId: "1:841887218289:web:637448a912b2a5839cf9d0",
  measurementId: "G-8N9KZVNR0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
