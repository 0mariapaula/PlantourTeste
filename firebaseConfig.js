import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCX4F8GO7xBVBnXo5SkE9iGrnr0dt4RsCk",
  authDomain: "plantour-35420.firebaseapp.com",
  projectId: "plantour-35420",
  storageBucket: "plantour-35420.appspot.com",
  messagingSenderId: "343479150412",
  appId: "1:343479150412:web:623c750738ef4ab80f51e9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
