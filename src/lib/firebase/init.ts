import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwJN4oicLvEG_JMYOmMq6EUOx0DbzMvUU",
  authDomain: "noblepath-1818c.firebaseapp.com",
  projectId: "noblepath-1818c",
  storageBucket: "noblepath-1818c.firebasestorage.app",
  messagingSenderId: "911568565614",
  appId: "1:911568565614:web:1e977ac6bfb751e1ba7d7f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);