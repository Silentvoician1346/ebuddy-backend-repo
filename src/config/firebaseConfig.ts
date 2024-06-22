import { FirebaseOptions, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import admin from "firebase-admin";
const serviceAccount = require("../../serviceAccountKey.json");

export const initializeFirebaseApp = () => {
  const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCqDCnp2XRtaqcWf2ODSyTMXyPWAmNmRaQ",
    authDomain: "ebuddy-test-85f77.firebaseapp.com",
    projectId: "ebuddy-test-85f77",
    storageBucket: "ebuddy-test-85f77.appspot.com",
    messagingSenderId: "1097686576230",
    appId: "1:1097686576230:web:8d77ed73cafda0ce67d1a7",
  };

  let app = getApps()[0];

  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  }

  const db = getFirestore(app);
  //   let firebaseApp;

  //   const auth = getAuth(firebaseApp);
  //   return auth;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  return { admin, db };
};
