const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAq0kuVnPM9n_MTNJ-zrROokc8iUwsIZdw",
    authDomain: "web-react-196911.firebaseapp.com",
    projectId: "web-react-196911",
});

const db = firebase.firestore();

export default db;
