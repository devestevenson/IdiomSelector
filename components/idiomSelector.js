import React from 'react'
import { useRouter } from 'next/router'

export default function IdiomSelector() {

    const router = useRouter();

    const changeIdiom = (e) => { //funcion que recibirá el idioma cuando se selecione
        router.push(router.pathname, router.pathname, {
            locale: e.target.value
        })
    }

  return (

    // Para seleccionar el lenguaje
    <select onChange={changeIdiom}> 
        <option value='es'>Español</option>
        <option value='en'>Ingles</option>
    </select>
  )
}
