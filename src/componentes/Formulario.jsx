import { useState } from "react"
import {db} from "../services/config"
import { collection, addDoc } from "firebase/firestore"

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    //Creamos los 3 estamos para trabajar con los valores del formulario

    //Creamos una funcion manejadora del formulario.

    const manejadorFormulario = (event) =>{
        event.preventDefault();

        addDoc(collection(db, "usuarios"),{
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        });

        setNombre("")
        setApellido("")
        setTelefono("")

    }



  return (
    <form onSubmit={manejadorFormulario}>
        <h2>Formulario de Contacto:</h2>

        <label htmlFor="nombre"> Nombre </label>
        <input type="text" id="nombre" onChange={(e) =>setNombre(e.target.value)} value={nombre} />
        <br /><br />

        <label htmlFor="apellido"> Apellido </label>
        <input type="text" id="apellido" onChange={(e) =>setApellido(e.target.value)} value={apellido} />
        <br /><br />

        <label htmlFor="celular"> Celular </label>
        <input type="text" id="celular" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
        <br />
        <button type="submit"> Enviar</button>
    </form>
  )
}

export default Formulario