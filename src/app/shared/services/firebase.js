import firebase from './firebase';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAvgw4gPAhU8ysdL2H31n8_eIewNe_ZyT8",
    authDomain: "tcc-action.firebaseapp.com",
    databaseURL: "https://tcc-action-default-rtdb.firebaseio.com",
    projectId: "tcc-action",
    storageBucket: "tcc-action.appspot.com",
    messagingSenderId: "507875655067",
    appId: "1:507875655067:web:d00a91125ee49a9df9b53e"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebase);
