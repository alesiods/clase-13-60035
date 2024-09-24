
import { useState, useEffect } from "react"

//importamos las funcones de Firebase que necesitamos para mostrar los productos
import {getDocs, collection, query, where, doc, updateDoc} from 'firebase/firestore'

import { db } from "../services/config"

const Productos = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
        const misProductos = query(collection(db, "inventario")); 

            //si quiero filtrar puedo usar where:
            /* const misProductos = query(collection(db, "inventario"), where("precio", ">", 2000)); */

        getDocs(misProductos)
            .then(respuesta => {
                setProductos (respuesta.docs.map((doc)=>({id:doc.id, ...doc.data()})))
                //Creo un nuevo array que contenga los datos del documento y ademas el id
            })
    },[productos])

    //MODIFICACION: Quiero descontar stock cada vez que hago click en "Comprar"

    const descontarStock = async (producto) =>{
        const productoRef = doc(db, "inventario", producto.id);
        const nuevoStock = producto.stock -1;
        
        await updateDoc (productoRef, {stock: nuevoStock})

    }


  return (
    <>
        <h2> Mis productos desde Firebase</h2>
        <div>
            {
                productos.map(producto=> (
                    <div key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <p>Precio: {producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                        <button onClick={()=> descontarStock(producto)}> Comprar </button>
                    </div>
                ))
            }

        </div>
    
    </>
  )
}

export default Productos