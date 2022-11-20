import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {getFirestore} from"@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDf9ioDgPwM-ASot2sccIgpfIR8SfD2Rbg",
  authDomain: "devheat-2022.firebaseapp.com",
  projectId: "devheat-2022",
  storageBucket: "devheat-2022.appspot.com",
  messagingSenderId: "587454216113",
  appId: "1:587454216113:web:153556e9abb6c55152ef90",
  measurementId: "G-8BHNPY1FYQ"
  };
  
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
console.log(profilePic)
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
  