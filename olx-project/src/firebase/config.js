import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC_F6lkfeNgX0I8ooPTuHLLaQyKftCZOy0",
    authDomain: "olx-clone-bbade.firebaseapp.com",
    projectId: "olx-clone-bbade",
    storageBucket: "olx-clone-bbade.appspot.com",
    messagingSenderId: "1099020061148",
    appId: "1:1099020061148:web:4aae637449bb6c944aa719",
    measurementId: "G-CE0QW6E2EF"
  };

  export default firebase.initializeApp(firebaseConfig)



  