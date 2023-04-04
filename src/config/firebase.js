
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite' 

const firebaseConfig = {
  apiKey: "AIzaSyDTmKKyfKXV7MExMRJuDgX1Fu4h-7shfQQ",
  authDomain: "tiktok---jornada-cd20c.firebaseapp.com",
  projectId: "tiktok---jornada-cd20c",
  storageBucket: "tiktok---jornada-cd20c.appspot.com",
  messagingSenderId: "53039546170",
  appId: "1:53039546170:web:6cd7c0975d1f81b99dda03"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;