import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({      //firebase config
  apiKey: "AIzaSyCxyJy6dPzaSK0tjQab7X4rpKiStAzkWBs",
  authDomain: "usfca-outdoors-club.firebaseapp.com",
  projectId: "usfca-outdoors-club",
  storageBucket: "usfca-outdoors-club.appspot.com",
  messagingSenderId: "40674165628",
  appId: "1:40674165628:web:ddf9f84d3cc95eccf11af9"
})

// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
  return (
    <div className="app">
      test
    </div>
  );
}

export default App;
