import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgoxxWIyA5jZOXbaCqHDkRpEnLFiOBr3w",
  authDomain: "rufa-dzn.firebaseapp.com",
  projectId: "rufa-dzn",
  storageBucket: "rufa-dzn.appspot.com",
  messagingSenderId: "318686125831",
  appId: "1:318686125831:web:545ff02820e817dbd2efa2",
  measurementId: "G-TQ2HDM2798"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);