import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyApJpE1vzlGF9y7-Ox8oLiG_hMdUvRSaRA",
  authDomain: "bedtimestories-b6278.firebaseapp.com",
  databaseURL: "https://bedtimestories-b6278.firebaseio.com",
  projectId: "bedtimestories-b6278",
  storageBucket: "bedtimestories-b6278.appspot.com",
  messagingSenderId: "652384764622",
  appId: "1:652384764622:web:c461918ee78dbf0960869f",
  measurementId: "G-ST52XPM13R"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   