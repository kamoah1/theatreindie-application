import { initializeApp } from "firebase/app";
//import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: "AIzaSyDe71R4OwzudtH5pRV-Fsz_bvEBcUGq1u4",
    authDomain: "filmechanics-6d452.firebaseapp.com",
    projectId: "filmechanics-6d452",
    storageBucket: "filmechanics-6d452.appspot.com",
    messagingSenderId: "450317643601",
    appId: "1:450317643601:web:2f9c5ea76c5ec55e7d6d70",
    measurementId: "G-XZTWPSK6RL"
};

//firebase.initializeApp(firebaseConfig);
const app =initializeApp(firebaseConfig);
//const auth = getAuth(app);
export {app};
// export const auth = app.auth();
// export const authUI =null;

// import { initializeApp } from "firebase/app";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyDe71R4OwzudtH5pRV-Fsz_bvEBcUGq1u4",
//   authDomain: "filmechanics-6d452.firebaseapp.com",
//   projectId: "filmechanics-6d452",
//   storageBucket: "filmechanics-6d452.appspot.com",
//   messagingSenderId: "450317643601",
//   appId: "1:450317643601:web:2f9c5ea76c5ec55e7d6d70",
//   measurementId: "G-XZTWPSK6RL"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {

//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logout = () => {
//   signOut(auth);
// };
// export {
//   auth,
//   db,
//   signInWithGoogle,
//   logInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   sendPasswordReset,
//   logout,
// };