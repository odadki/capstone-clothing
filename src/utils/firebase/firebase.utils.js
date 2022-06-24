import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARXAYcduSltvOaD2em3YSfkNy6sC6nZBs",
  authDomain: "capstone-clothing-fa49d.firebaseapp.com",
  projectId: "capstone-clothing-fa49d",
  storageBucket: "capstone-clothing-fa49d.appspot.com",
  messagingSenderId: "427039751291",
  appId: "1:427039751291:web:9e28da16a4c5116677b6de",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
