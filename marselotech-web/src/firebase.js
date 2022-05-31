// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, where, query} from "firebase/firestore";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {ref, onUnmounted} from 'vue';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5H63Brfoe6WKs8t2v-5WXVP70c8X8hm4",
    authDomain: "marselotech-web.firebaseapp.com",
    databaseURL: "https://marselotech-web-default-rtdb.firebaseio.com",
    projectId: "marselotech-web",
    storageBucket: "marselotech-web.appspot.com",
    messagingSenderId: "186580154211",
    appId: "1:186580154211:web:429698f29b355d1587c556",
    measurementId: "G-RTJMHKPJ0T"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export const createUser = async user => {

    try {
        const docRef = await addDoc(collection(db, "users"), user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

export const getUser = async id => {

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    });

}

export const useLoadUsers = () => {
    const users = ref([])
    usersCollection.onSnapshot (snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close);

    return users;

}

/*export const autenticatUser = async user => { 

    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode == "auth/wrong-password"){
            console.log("Datos incorrectos")
        }else if(errorCode == "auth/user-not-found"){
            console.log("El usuario introducido no existe");
        }
        
      });

}*/

export const autenticatUser = async user => { 

    const q1 = query(collection(db, "users"), where("email", "==", user.email));
    const q2 = query(collection(db,"users"), where("robotid", "==", user.robotid), where("email", "==", user.email));

    

    const querySnapshot1 = await getDocs(q1);
    const querySnapshot2 = await getDocs(q2);

    if(querySnapshot1.docs.length == 0){

        console.log("No existe un usuario con ese email.");
        

    }else{

        if(querySnapshot2.docs.length == 0){
            console.log("Codigo de robot erroneo.");
            
        }else{

            querySnapshot2.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                return (doc.id, " => ", doc.data());


            });
            
        }  

    }
    return("error","=>", 3);

}




