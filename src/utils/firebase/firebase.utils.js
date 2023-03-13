import { initializeApp } from 'firebase/app';

import  {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDLeUVIAVsNG-ssSVwi3hjAk8UqRy4etY",
  authDomain: "elevate-clothing-db.firebaseapp.com",
  projectId: "elevate-clothing-db",
  storageBucket: "elevate-clothing-db.appspot.com",
  messagingSenderId: "477016736944",
  appId: "1:477016736944:web:83413beac64dfd0d59e775"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"

});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};