import { createContext, ReactNode , useContext} from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, Firestore, getDocs, getFirestore } from "firebase/firestore";

interface FirebaseProviderProps {
  children: ReactNode;
}

interface FirebaseContextType {
  signUpUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  signinUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  firebaseAuth: any;
  firebaseFirestore: any;
  listAllElem: any;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider: React.FC<FirebaseProviderProps> = (props) => {
  const { children } = props;

  const firebaseConfig = {
    apiKey: "AIzaSyCxFbJUVYllqdEniGOTIPXWqOIrpzcw3Tw",
    authDomain: "fir-9c7aa.firebaseapp.com",
    projectId: "fir-9c7aa",
    storageBucket: "fir-9c7aa.appspot.com",
    messagingSenderId: "436865798768",
    appId: "1:436865798768:web:6064f80a0be3aebf255ab5",
    databaseURL :"https://fir-9c7aa-default-rtdb.firebaseio.com/"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const firebaseFirestore = getFirestore(firebaseApp);
  const Firestore = getFirestore(firebaseApp);

  // signup user with email and password
  const signUpUserWithEmailAndPassword = (email: string, password: string) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  // signin user with email and password
  const signinUserWithEmailAndPassword = (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const listAllELem = () =>{
    return getDocs(collection(Firestore, "test"));
  }

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        firebaseAuth,
        firebaseFirestore,
        listAllElem: listAllELem, // Corrected key name
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );  
};
