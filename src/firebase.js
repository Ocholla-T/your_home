import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config();

var firebaseConfig = {
  apiKey: 'AIzaSyAK2TExbhv99w5IV4clvEPZkXAVRWNxMmI',
  authDomain: 'your-home-faebe.firebaseapp.com',
  projectId: 'your-home-faebe',
  storageBucket: 'your-home-faebe.appspot.com',
  messagingSenderId: '990965481413',
  appId: '1:990965481413:web:03d7b9dcd54e38c9f695ac',
};

console.log(process.env.API_KEY);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const auth = firebase.auth();
export const devicesCollection = db.collection('devices');
