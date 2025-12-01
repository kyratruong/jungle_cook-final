import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD39Tll1Sqbagwkc0Rzu_kfo0d93ecSKds",
  authDomain: "jungle-315.firebaseapp.com",
  projectId: "jungle-315",
  storageBucket: "jungle-315.firebasestorage.app",
  messagingSenderId: "27741378378",
  appId: "1:27741378378:web:570c9ecfb7130b3a1453b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
