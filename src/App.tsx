//atajo para  funcion flecha
//rafc+enter->componente react
/* import { TiposBasicos } from "./typescript/TiposBasicos"; */

import { Login } from "./components/Login"

/* import { ObjetosLiterales } from "./typescript/ObjetosLiterales" */
/* import { Funciones } from './typescript/Funciones'; */
/* import { Contador } from './components/Contador'; */
/* import { ComponenteUseEfect } from './components/ComponenteUseEfect';
import { ContadorCustomHook } from './components/ContadorCustomHook'; */

const App = () => {
  return (
    <div className="mt-2"  >   
      <h1>Introduccion TS -  React</h1>
      <hr />
      {/* <TiposBasicos /> */} {/**asi se colocan comentarios */}
     {/*  <ObjetosLiterales /> */}
     {/* <Funciones /> */}
     {/* < Contador/> */}
     {/* <ContadorCustomHook/> */}
    {/*  <ComponenteUseEfect/> */}
    <Login/>
    </div>
  )
}


export default App
