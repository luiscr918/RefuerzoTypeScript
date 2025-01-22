import { useEffect, useState } from "react"


export const ComponenteUseEfect = () => {
    //hook useState permite cambiar estado de variable componente,etc
    const [bandera, setBandera] = useState<boolean>(false);

    //función cambiar el estado de la variable bandera      cuando es void no es necesario definir tipo de dato
    const  cambiarBandera=()=>{
        setBandera(!bandera);
    }
    //hook use effect permite ejecutar efectos secundarios en componentes funcinales
    //1.se ejecuta cada vez que el componente se renderiza
    //2.se ejecuta cuando existe unal ista de dependencias

    useEffect(()=>{
        //codigo a ejecutar
        console.log('desde el use effect')
    },[bandera]); //lista de dependencias

  return (
    <div>
        <h3>Hook UseEffect xd</h3>
        <button onClick={cambiarBandera}>Cambiar </button>
    </div>
  )
}
