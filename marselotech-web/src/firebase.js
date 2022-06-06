// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, where, query} from "firebase/firestore";
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
const db = getFirestore(app);

export const createUser = async user => {

    try {
        const docRef = await addDoc(collection(db, "users"), user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

export const getLastImage = async id => {

    const q = query(collection(db, "images"), where("robotid","==",id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        console.log(doc.data().img);
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



export const autenticatUser = async user => { 

    const q1 = query(collection(db, "users"), where("email", "==", user.email));
    const q2 = query(collection(db,"users"), where("robotid", "==", user.robotid), where("email", "==", user.email));
    const querySnapshot1 = await getDocs(q1);
    const querySnapshot2 = await getDocs(q2);

    if(querySnapshot1.docs.length == 0){
        return {status: 2, message: "No existe un usuario con ese email."}
    }else{
        if(querySnapshot2.docs.length == 0){
            return {status: 1, message: "Datos incorrectos"}
        }else{
            return {status: 0, data: querySnapshot2.docs[0].data()};           
        }  
    }
}





