import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//vAMOS A IMPORTAR DOS FUNCIONES DE FIREBASE

//initializeApp = esta funcion la utilizo para Iniciar la conexion con Firebase
//getFirestore = se utiliza pra obtener una instancia de Firestore



//Estamos trabajando con un objeto con toda nnuestra informacion de la cuenta. Esta incluye la key ersonal de acceso a la BD.
const firebaseConfig = {
  apiKey: "AIzaSyDXrSsuO4FF7xerxGOr1Xl0tj3jm-Z-_us",
  authDomain: "marolio-60035.firebaseapp.com",
  projectId: "marolio-60035",
  storageBucket: "marolio-60035.appspot.com",
  messagingSenderId: "801018924720",
  appId: "1:801018924720:web:ff71c178147002dad3f575"
};

//Inicializamos Firebase y se pasa la configuracion como argumento
//Esto retorna una instancia de Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

//Exportamos esta referencia para que esté disponible en toda nuestra aplicacion