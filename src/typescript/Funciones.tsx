

export const Funciones = () => {
//FUNCIONES
/* const sumar=():number=>{
  return 6+1;
} */
//funciones con parámetros
const sumar=(num1:number,num2:number):number=>{
  return num1+num2;
}
//funcion void
/* const informacion=():void=>{
  console.log("hola");
} */

  return (
    <div>
        <h3>Funciones</h3>
        <span>el resultado es: {sumar(5,6)}</span>
        {/* <button onClick={informacion}>enviar</button> */}
        
    </div>
  )
}
