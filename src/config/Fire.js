import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import {API_KEY, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId} from "./utils"

const config = {
  apiKey: API_KEY,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId  
}

const fire = firebase.initializeApp(config)

export default fire;