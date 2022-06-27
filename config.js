import firebase from 'firebase';

// Agregar SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyD8XU3dPBB9ZAPDq9_GPpHC_hlXiA7eDME",
        authDomain: "pro-067.firebaseapp.com",
        projectId: "pro-067",
        storageBucket: "pro-067.appspot.com",
        messagingSenderId: "493327785832",
        appId: "1:493327785832:web:9e1c674701839e607100dd"
      };
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
