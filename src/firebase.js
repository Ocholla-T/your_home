import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCUbY7PjqBAXLyilfMsb4_d2Gw1xDyUpBg',
  authDomain: 'your-home-77581.firebaseapp.com',
  projectId: 'your-home-77581',
  storageBucket: 'your-home-77581.appspot.com',
  messagingSenderId: '1026192543745',
  appId: '1:1026192543745:web:a513f0d4b6f7c3da2c3000',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const auth = firebase.auth();
export const devicesCollection = db.collection('devices');
