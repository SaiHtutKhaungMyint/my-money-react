import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB9BCpyVC74a8-wmQcrRdX0YQKbWBJP7rY',
  authDomain: 'my-money-a50ea.firebaseapp.com',
  projectId: 'my-money-a50ea',
  storageBucket: 'my-money-a50ea.appspot.com',
  messagingSenderId: '943651327172',
  appId: '1:943651327172:web:1856d9bc05c307daf60d91',
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
