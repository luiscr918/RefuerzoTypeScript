// rafc+ enter
export const TiposBasicos = () => {
  //variable 
  // let nombre: string | number ='Viviana';
  //constante:
  const nombre: string='Viviana';
  const edad:number=32;  
  const donanteOrganos:boolean=true;
  //arreglos
  const poderes:string[]=['velocidad','volar','invicibilidad'];
  //agregar datos en el arreglo
  poderes.push('fuerza');


  return (
    <div>
        <h3>Tipos Basicos</h3>
        {nombre}, {edad}, {donanteOrganos ?'Donante':'No donante'}
        <br />
        {poderes.join(',')}


    </div>
  )
}
