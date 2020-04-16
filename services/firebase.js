"use strict";
// Your web app's Firebase configuration
const _firebaseConfig = {
  apiKey: "AIzaSyAdku4_g-FYSppJD3l_sSQEvYV_Eiu3HjA",
  authDomain: "mdu-spring2020.firebaseapp.com",
  databaseURL: "https://mdu-spring2020.firebaseio.com/",
  projectId: "mdu-spring2020",
  storageBucket: "mdu-spring2020.appspot.com",
  messagingSenderId: "976923281083",
  appId: "1:976923281083:web:2ea6dbf790cc206370cb9e",
  measurementId: "G-ZC059LEQPE",
};
// Initialize Firebase and database references
firebase.initializeApp(_firebaseConfig);

export const _db = firebase.firestore();
