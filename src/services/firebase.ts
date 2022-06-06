import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCfJF0RHzk7bdlpqAd8Kib_CZxnALjx8SE',
  authDomain: 'gb-reactjs-f2dac.firebaseapp.com',
  projectId: 'gb-reactjs-f2dac',
  storageBucket: 'gb-reactjs-f2dac.appspot.com',
  messagingSenderId: '820261432202',
  appId: '1:820261432202:web:134c7139e653e78b32f673',
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
