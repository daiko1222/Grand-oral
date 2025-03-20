import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5b_8oSV2Q1Lm0AN3hqyDstgy9Yzi_89o",
  authDomain: "netflix-clone-eccbf.firebaseapp.com",
  projectId: "netflix-clone-eccbf",
  storageBucket: "netflix-clone-eccbf.firebasestorage.app",
  messagingSenderId: "1083984176053",
  appId: "1:1083984176053:web:77003173f44bdc7f816ffc"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (nom, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name: nom,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.error("Erreur Firebase (signup) :", error.code);
        throw error; // Permet de propager l'erreur à `userAuth`
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Erreur Firebase (login) :", error.code);
        throw error;
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, signup, login, logout };
