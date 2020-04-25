// ========== GLOBAL FIREBASE CONFIG ========== //
// Your web app's Firebase configuration

// const _firebaseConfig = {
//   apiKey: "AIzaSyAdku4_g-FYSppJD3l_sSQEvYV_Eiu3HjA",
//   authDomain: "mdu-spring2020.firebaseapp.com",
//   databaseURL: "https://mdu-spring2020.firebaseio.com/",
//   projectId: "mdu-spring2020",
//   storageBucket: "mdu-spring2020.appspot.com",
//   messagingSenderId: "976923281083",
//   appId: "1:976923281083:web:2ea6dbf790cc206370cb9e",
//   measurementId: "G-ZC059LEQPE",
// };

const _firebaseConfig = {
  apiKey: "AIzaSyDvvRNWaKqcLzh4oRZrv49wYK6j34P39G4",
  authDomain: "arla-ba24d.firebaseapp.com",
  databaseURL: "https://arla-ba24d.firebaseio.com",
  projectId: "arla-ba24d",
  storageBucket: "arla-ba24d.appspot.com",
  messagingSenderId: "808968181259",
  appId: "1:808968181259:web:bb2dec91c7b4be0245190e"
};



// Initialize Firebase and database references
firebase.initializeApp(_firebaseConfig);
const _db = firebase.firestore();