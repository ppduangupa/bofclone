const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDtrcqFxt2UKPAown7-6g0wAsU3a3f3kRM",
  authDomain: "battle-of-fortune-clone.firebaseapp.com",
  databaseURL: "https://battle-of-fortune-clone.firebaseio.com",
  projectId: "battle-of-fortune-clone",
  storageBucket: "battle-of-fortune-clone.appspot.com",
  messagingSenderId: "695400846258"
});

const db = firebase.firestore();

export default db;
