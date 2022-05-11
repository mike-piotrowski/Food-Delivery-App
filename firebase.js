import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxjCBqtPnV-DdymILtXaIMbxnxGS84N2E",
  authDomain: "uber-eats-ytb-cloneapp.firebaseapp.com",
  projectId: "uber-eats-ytb-cloneapp",
  storageBucket: "uber-eats-ytb-cloneapp.appspot.com",
  messagingSenderId: "170882731769",
  appId: "1:170882731769:web:f2b8cded6c243a4d4fdc28",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
