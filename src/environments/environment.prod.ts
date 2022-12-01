export const environment = {
  firebase: {
    projectId: 'vans-recreation',
    appId: '1:11654312375:web:b205daa5dfc72a8d6a7832',
    databaseURL: 'https://vans-recreation-default-rtdb.firebaseio.com',
    storageBucket: 'vans-recreation.appspot.com',
    apiKey: 'AIzaSyALF6qpKj6RLenbaeZeatppMh2yk5A8RZU',
    authDomain: 'vans-recreation.firebaseapp.com',
    messagingSenderId: '11654312375',
    measurementId: 'G-7JNG4JGJDH',
  },
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALF6qpKj6RLenbaeZeatppMh2yk5A8RZU",
  authDomain: "vans-recreation.firebaseapp.com",
  databaseURL: "https://vans-recreation-default-rtdb.firebaseio.com",
  projectId: "vans-recreation",
  storageBucket: "vans-recreation.appspot.com",
  messagingSenderId: "11654312375",
  appId: "1:11654312375:web:b205daa5dfc72a8d6a7832",
  measurementId: "G-7JNG4JGJDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);