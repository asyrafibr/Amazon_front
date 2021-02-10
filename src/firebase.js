// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAI20u6NRt4QzKX7rdOKHQ2diQi65q7fG8",
    authDomain: "clone-1997e.firebaseapp.com",
    projectId: "clone-1997e",
    storageBucket: "clone-1997e.appspot.com",
    messagingSenderId: "796756641006",
    appId: "1:796756641006:web:74c454425e7e3011979fff",
    measurementId: "G-B1RVC9PNF5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};