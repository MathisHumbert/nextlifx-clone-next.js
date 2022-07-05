import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNaBP4ic3o1RJr-gB9s7NIIeytJ0cVrU4',
  authDomain: 'netflix-clone-next-js.firebaseapp.com',
  projectId: 'netflix-clone-next-js',
  storageBucket: 'netflix-clone-next-js.appspot.com',
  messagingSenderId: '610105400453',
  appId: '1:610105400453:web:5c61e812d122a102a99dec',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
