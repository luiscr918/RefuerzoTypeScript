import { useState } from "react"

export const Contador = () => {
//hook useState=permite el cambio de estado de un componente ,variable,arreglo,etc
//1. variable,arreglo, etc
//2. funcion que cambia el estado de la variable,arreglo,etx

const [valor, setValor] = useState<number>(0); //()entre parentesis siempre va el parámetro inicial de la variable,arreglo,etc
//Cambiar estado mediante la funcion
//de otra manera
/* const contador=(numero:number):void =>{
    setValor(valor+numero)
} */
  return (
    <div>
        <h3>Contador: <small>{valor}</small> </h3>
        <button className="btn btn-primary" 
                onClick={()=>setValor(valor+1)}>  
            +1
            </button>
        &nbsp; 
        <button className="btn btn-primary" onClick={()=>setValor(valor-1)}>-1</button>
        &nbsp; 
        <button className="btn btn-primary" onClick={()=>setValor(0
            
        )}>reset</button>
    </div>
  )
}
