import React from 'react'
import './css/estilos.css'
import Usuarios from './components/Usuarios'

const App = () => {

  const sesion = false;

  return (
    <>
      {sesion? 
        <Usuarios /> :
        <h1 className='titulo'>Debes Iniciar Sesión</h1>}
    
    </>
  )
}

export default App