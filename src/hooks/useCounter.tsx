//Creando nusestro propio hook

import { useState } from "react";


export const useCounter = (inicial:number=20) => { //el =20 es el valor por default si no manda un valor inicial
    //hook useState=permite el cambio de estado de un componente ,variable,arreglo,etc
//1. variable,arreglo, etc
//2. funcion que cambia el estado de la variable,arreglo,etx

const [valor, setValor] = useState<number>(inicial); //()entre parentesis siempre va el parámetro inicial de la variable,arreglo,etc
//Cambiar estado mediante la funcion
//de otra manera
const contador=(numero:number):void =>{
    setValor(valor+numero)
}
const resetear=(numero:number):void=>{
    setValor(valor*numero);
}
return{
    valor,
    contador,
    resetear
}
}
