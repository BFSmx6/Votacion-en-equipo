import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyApskXtHaIQFIP4DYvpowR7DcD4-21CxT4",
    authDomain: "proyecto-67.firebaseapp.com",
    databaseURL: "https://proyecto-67-default-rtdb.firebaseio.com",
    projectId: "proyecto-67",
    storageBucket: "proyecto-67.appspot.com",
    messagingSenderId: "976657489867",
    appId: "1:976657489867:web:639a24af571c0ef78ba04e",
    measurementId: "G-Y7CTLBW04Z"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
