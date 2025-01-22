//rafc+enter


export const ObjetosLiterales = () => {
    //logica

    //INTERFACE
    interface Persona{
        nombreCompleto:string;
        apellido:string;
        edad:number;
        direccion:Direccion;
    }
    interface Direccion{
        pais:string;
        casaNumero:number;
    }

    //objeto
    const persona:Persona={
        nombreCompleto:'Luis Alexander',
        apellido:'flores',
        edad:32,
        direccion:{
            pais:'Ecuador',
            casaNumero:365
        }
    }

    //ingresar a las propiedades del objeto
    /* persona.nombreCompleto='viviana matilde'; */
    //no se puede instansiar las interfaces
    /* const personaObj=new Persona(); */
    
  return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
            {JSON.stringify(persona,null,2)}
            </pre>
        </code>

    </div>
  )
}

