const _firebaseConfig = {
  apiKey: "AIzaSyDvvRNWaKqcLzh4oRZrv49wYK6j34P39G4",
  authDomain: "arla-ba24d.firebaseapp.com",
  databaseURL: "https://arla-ba24d.firebaseio.com",
  projectId: "arla-ba24d",
  storageBucket: "arla-ba24d.appspot.com",
  messagingSenderId: "808968181259",
  appId: "1:808968181259:web:bb2dec91c7b4be0245190e",
};

// Initialize Firebase and database references
firebase.initializeApp(_firebaseConfig);
const _db = firebase.firestore();
