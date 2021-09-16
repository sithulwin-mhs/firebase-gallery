import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjDzF8IXd0748yldP1nd_gNiN3k7GyoJY",
  authDomain: "photo-gallery-9c0b0.firebaseapp.com",
  projectId: "photo-gallery-9c0b0",
  storageBucket: "photo-gallery-9c0b0.appspot.com",
  messagingSenderId: "71779945201",
  appId: "1:71779945201:web:6a2fce10b285b8a8acb750"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };