// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqeIGS74IODcN_6s6K0uUB3O2Y1OenJok",
  authDomain: "cleactadh-laethuil-cd83e.firebaseapp.com",
  projectId: "cleactadh-laethuil-cd83e",
  storageBucket: "cleactadh-laethuil-cd83e.firebasestorage.app",
  messagingSenderId: "365635527375",
  appId: "1:365635527375:web:dbcad627c28609e587cdba",
  measurementId: "G-BDWLCRW2CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
export default app;
