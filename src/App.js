import React from 'react'
import './css/estilos.css'
import Usuarios from './components/Usuarios'
import Footer from './components/Footer'
import Boton from './components/Boton'

const App = () => {

  const sesion = false;

  return (
    <>
      {sesion? 
        <>
          <Usuarios />
          <Footer />
        </>:
        <>
          <h1 className='titulo' style={{color:"red"}}>Debes Iniciar Sesión</h1>
            <Boton/>
            <Footer />
          </>
      }
    
    </>
  )
}

export default App