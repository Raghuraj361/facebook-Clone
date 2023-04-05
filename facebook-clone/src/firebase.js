import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu33deSCYnQ-7zvWKLRA6mYL3snXPg-ks",
  authDomain: "facebook-fd241.firebaseapp.com",
  projectId: "facebook-fd241",
  storageBucket: "facebook-fd241.appspot.com",
  messagingSenderId: "153090255964",
  appId: "1:153090255964:web:ab641df3a60e287b6d4a99",
  measurementId: "G-6JL6WWVRFS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);








// --------------------------------------------------------------------

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBBCE1fkyR0MKs5EUmTMajBCc7TQ8XwGeI",
//   authDomain: "facebook-clone-e1a69.firebaseapp.com",
//   projectId: "facebook-clone-e1a69",
//   storageBucket: "facebook-clone-e1a69.appspot.com",
//   messagingSenderId: "840317904976",
//   appId: "1:840317904976:web:a9a7892339fd55e9a44955",
//   measurementId: "G-451RYGYZ2V"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);