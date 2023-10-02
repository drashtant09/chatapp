
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWWtxJa6KJchsE1jR8xAOLxBLMzUl1FFg",
  authDomain: "chat-faada.firebaseapp.com",
  projectId: "chat-faada",
  storageBucket: "chat-faada.appspot.com",
  messagingSenderId: "177948226053",
  appId: "1:177948226053:web:e1144a7fbed9acd3eaa26c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth= getAuth()
 export const storage = getStorage();
 export const db= getFirestore();
