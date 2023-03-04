//UseState: useState es una función que nos permite crear variables de estado en un componente funcional.

import React,{useState} from 'react'
import '../css/estilos.css'

const Boton = () => {

    //  variables y funciones
    const [contador, setContador] = useState(0)

  return (
    <>
        <p className='titulo' style={{background:"orange",color:"white"}}>Ejemplo de contador haz Click {contador} </p>
        <button className='btn' onClick={()=>setContador(contador+1)}>Aumentar</button>

    </>
  )
}

export default Boton