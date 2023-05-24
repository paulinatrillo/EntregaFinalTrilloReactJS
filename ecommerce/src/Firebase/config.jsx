
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXUnimKBhZZ-VO3H-j3NuHC2bUZOh3Nv4",
  authDomain: "ecommerce-antiguo-bazar.firebaseapp.com",
  projectId: "ecommerce-antiguo-bazar",
  storageBucket: "ecommerce-antiguo-bazar.appspot.com",
  messagingSenderId: "710077193366",
  appId: "1:710077193366:web:31c4e37a7993e3c9f636b7"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app