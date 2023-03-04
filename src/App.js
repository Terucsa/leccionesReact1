import React from 'react'
import './css/estilos.css'


const App = () => {

    const saludo = "React - INTECAP"
    const nombre ="Yoni Edilzar Escobar Bautista"


  return (
    <>
        <h1 className='titulo'>{saludo}</h1>
        <p className='titulo'>{nombre}</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et repellendus eius ullam dolorum quas laborum esse repudiandae voluptas accusamus, tempora veritatis suscipit. Modi, nisi cupiditate mollitia quaerat qui officia.</p>
    </>

  )
}

export default App