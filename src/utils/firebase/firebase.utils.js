import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD9HSCH_0I6yaqbfd-21iS7VFMRFE5GJIc',
  authDomain: 'crwn-db-a06dd.firebaseapp.com',
  projectId: 'crwn-db-a06dd',
  storageBucket: 'crwn-db-a06dd.appspot.com',
  messagingSenderId: '750060224775',
  appId: '1:750060224775:web:c33577e1140ff7230d45a2',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
