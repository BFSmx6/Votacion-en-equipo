import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDLc0f9xtWKJ_2HppRq8AwYAE8zCubtKJA",
    authDomain: "votacionesenequipop67.firebaseapp.com",
    databaseURL: "https://votacionesenequipop67-default-rtdb.firebaseio.com",
    projectId: "votacionesenequipop67",
    storageBucket: "votacionesenequipop67.appspot.com",
    messagingSenderId: "539128646996",
    appId: "1:539128646996:web:5ef0018a58fcc7eb334cc1",
    measurementId: "G-G9RQ2XE27J"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
