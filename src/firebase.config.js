import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrERV9F6U3Nq_cga3jQDIgb0FDQRRVKO4',
  authDomain: 'house-marketplace-app-re-cd306.firebaseapp.com',
  projectId: 'house-marketplace-app-re-cd306',
  storageBucket: 'house-marketplace-app-re-cd306.appspot.com',
  messagingSenderId: '417489076482',
  appId: '1:417489076482:web:76458600859f80590b021b'
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
