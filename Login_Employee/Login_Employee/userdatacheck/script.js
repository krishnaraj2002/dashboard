// Your Firebase project configuration
const firebaseConfig = {
    authDomain: "verification-e0057.firebaseapp.com",
    databaseURL: "https://verification-e0057-default-rtdb.firebaseio.com",
    projectId: "verification-e0057",
    storageBucket: "verification-e0057.appspot.com",
    messagingSenderId: "667813244041",
    appId: "1:667813244041:web:f8411e6752af4bccff2a58",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Function to redirect to the data page with the entered password as a URL parameter
  function redirectToDataPage() {
    const passwordInput = document.getElementById('password').value;
    window.location.href = `data.html?password=${encodeURIComponent(passwordInput)}`;
  }
  