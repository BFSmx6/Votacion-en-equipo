import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAeSNGxt-djUKrFXEYVLdIcIuJz4Ub3YHk",
    authDomain: "votacion-en-equipo.firebaseapp.com",
    projectId: "votacion-en-equipo",
    storageBucket: "votacion-en-equipo.appspot.com",
    messagingSenderId: "754830916011",
    appId: "1:754830916011:web:0a723bceda81f489c87aee"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
