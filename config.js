import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {  
        apiKey: "AIzaSyAM0R2ZnzzVBQaOrJP4Uv7K5doeGn-iivc",
        authDomain: "codigo-abierto-90d4c.firebaseapp.com",
        databaseURL: "https://codigo-abierto-90d4c-default-rtdb.firebaseio.com",
        projectId: "codigo-abierto-90d4c",
        storageBucket: "codigo-abierto-90d4c.appspot.com",
        messagingSenderId: "816477030035",
        appId: "1:816477030035:web:8031220937d6b00fbc2f66"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
