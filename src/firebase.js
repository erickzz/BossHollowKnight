// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDv_L7ym674_0luWNi09F9LBMPoiINWTu4',
  authDomain: 'fir-test-1dd53.firebaseapp.com',
  databaseURL: 'https://fir-test-1dd53-default-rtdb.firebaseio.com',
  projectId: 'fir-test-1dd53',
  storageBucket: 'fir-test-1dd53.appspot.com',
  messagingSenderId: '493126550984',
  appId: '1:493126550984:web:ec5731fa88686a1cdf6cfd',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
