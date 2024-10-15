import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCYWielxz_77FPUB4lH5TvrxeaQ5_uuyXM",
    authDomain: "usman-authentication.firebaseapp.com",
    projectId: "usman-authentication",
    storageBucket: "usman-authentication.appspot.com",
    messagingSenderId: "935741774116",
    appId: "1:935741774116:web:5fb2be7313b1df2f3d3bb1",
    measurementId: "G-JLWPJ5WFKS"
  };
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);