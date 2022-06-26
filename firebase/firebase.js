import {initializeApp} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import {
  getDatabase,
  ref as firebaseRef,
  set as firebaseSet,
  child,
  get,
  onValue,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCfHM_hNo3KWkC8fdz9JppHc0MZQmmTgt8',
  authDomain: 'appchatkai.firebaseapp.com',
  databaseURL:
    'https://appchatkai-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'appchatkai',
  storageBucket: 'appchatkai.appspot.com.appspot.com',
  appId: '1:956285319212:android:ee403d7701a3ec0c9b3989',
  messagingSenderId: '956285319212',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();

export {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  firebaseRef,
  firebaseSet,
  sendEmailVerification,
  child,
  get,
  onValue,
};
