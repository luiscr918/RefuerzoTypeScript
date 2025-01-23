import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ListaUsuario, Usuario } from "../interfaces/listaUsuarios";


export const Usuarios = () => {
    //Generar un arreglo de usuarios
    const [users, setUsers] = useState<Usuario[]>([]);


    useEffect(() => {
      //Petición a la API
      //entre <> el tipo de dato interfaz
      reqResApi.get<ListaUsuario>('/users')//Dentro del get mandar lo q le falta a la url pricipal para acceder a cierto endpoint
      //promesa
      .then(resp=>{
       // console.log(resp.data.data);
       setUsers(resp.data.data)
      })
      .catch(console.log)

      

    }, []);
    
    //Funcion que repite las filas necesarias  en la tabla para mostrar usuarios
    const itemRowsTable=({first_name,last_name,email,avatar}:Usuario)=>{
        //desestructuración
        /* const {avatar,first_name,last_name,email}=usuario; */
        //También vale directo es decir al entrar a la función itemRowsTable 
        return(
            <tr>
                    <td><img src={avatar} alt={first_name} 
                    style={{
                        width:75,
                        borderRadius:7
                    }} />
                    </td>
                    <td>{first_name.concat(' ',last_name)}</td>
                    <td>{email}</td>
            </tr>
        )

    };
    

  return (
    <div>
        <h3>Lista Usuarios</h3>
        <table className="table">
            <thead>
                <tr >
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((usuario)=>itemRowsTable(usuario))

                }
            </tbody>
            
        </table>
        </div>
  )
}
