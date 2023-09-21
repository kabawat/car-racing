const firebaseConfig = {
    apiKey: "AIzaSyCgPTvIPHSiRaWgKF8-VjuVA6jx-2KdgNw",
    authDomain: "games-21.firebaseapp.com",
    databaseURL: "https://games-21-default-rtdb.firebaseio.com",
    projectId: "games-21",
    storageBucket: "games-21.appspot.com",
    messagingSenderId: "89272966656",
    appId: "1:89272966656:web:a53a716f3e29bead3642e5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();