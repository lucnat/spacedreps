
import firebase from "firebase";

var dev = {
    apiKey: "AIzaSyBRQVvQkZGaqc-BhhQa0Y-pAhXyePVjoZk",
    authDomain: "spacedreps-dev.firebaseapp.com",
    databaseURL: "https://spacedreps-dev.firebaseio.com",
    projectId: "spacedreps-dev",
    storageBucket: "spacedreps-dev.appspot.com",
    messagingSenderId: "714919896975",
    appId: "1:714919896975:web:91fa7381ae851ec4570dfa",
    measurementId: "G-YCKNGG93L4"
};

const firebaseApp = firebase.initializeApp(dev); // check for dev/prod
firebase.analytics();

export default firebaseApp