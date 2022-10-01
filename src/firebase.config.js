import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJQd0-J_9ZBOvC5wD4Em31QdwUaKgDjQY',
  authDomain: 'house-marketplace-app-ee8d6.firebaseapp.com',
  projectId: 'house-marketplace-app-ee8d6',
  storageBucket: 'house-marketplace-app-ee8d6.appspot.com',
  messagingSenderId: '677298467897',
  appId: '1:677298467897:web:2923c696684be7ab92c9e8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
