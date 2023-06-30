import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZFAXi64VOVaDotY9phJTdkTpFoTRGf0M",
  authDomain: "restaurant-app-e5b0f.firebaseapp.com",
  projectId: "restaurant-app-e5b0f",
  storageBucket: "restaurant-app-e5b0f.appspot.com",
  messagingSenderId: "1017679737727",
  appId: "1:1017679737727:web:bb8425fa5d9a94d17b604a",
  measurementId: "G-38F8TEDX2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);