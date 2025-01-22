import { useCounter } from "../hooks/useCounter"


export const ContadorCustomHook = () => {
    //LLAMAR A NUESTRO CUSTOM HOOK
    //Accedemos a los valores de retorno de nuestra funcion hook
    const{valor,contador,resetear }=useCounter();

  return (
    <div>
        <h3>Contador Custom Hook: <small>{valor}</small> </h3>
        <button className="btn btn-primary" 
                onClick={()=>contador(1)}>  
            +1
            </button>
        &nbsp; 
        <button className="btn btn-primary" onClick={()=>contador(-1)}>-1</button>
        &nbsp; 
        <button className="btn btn-primary" onClick={()=>resetear(0)}>reset</button>
    </div>
  )
}
