import { useEffect, useReducer } from "react"


export const Login = () => {
    //interfaz de estado de autenticación
    interface AuthState{
        validando:boolean,
        token:string|null,
        userName:string,
        password:string,
    }
    //creando estado inicial -segundo parametro del useReducer
    const inicialState:AuthState={
        validando:true,
        token:null,
        userName:'',
        password:''
    }
    //type para los parametros de las acciones
    type LoginPayload={
        username:string,
        password:string
    }

    // para el "action" las posibles acciones que se puede realizar
    type AuthAction=
        {type:'logout'}
        |{type:'login',payload:LoginPayload}  //payload para mandar acciones con parámetros

    //funcion reducer - primer parametro
    const authReducer=(state:AuthState,action:AuthAction):AuthState=>{
        switch(action.type){
            case 'logout':
                return{
                    validando:false,
                    token:null,
                    userName:'',
                    password:''
                }
            case 'login':
                //desestructuración de objetos
                const {username,password}=action.payload;
                return{
                    validando:false,
                    token:'RhjHHJj12_jhjdfujhkdshjkgfdshbjkfdshbjk',
                    userName: username,
                    password: password
                }
            default:
            return state;

        }
        
    }
    //hook useReducer.-permite el cambio de estados mas complejos
    const[state,dispach]=useReducer(authReducer,inicialState);

    //hook useEffect
    useEffect(() => {
        //FUNCION DE TIEMPO
        setTimeout(() => {
            //Disparando la accion
            dispach({type:'logout'})
        }, 1500); //milisegundos
    }, []);

    //funcion para disparar la accion del login
    const login=():void=>{
        dispach({
            type:'login',
            payload:{
                username:'luis',
                password:'luis123'
            }
        });
    }
    const logout=():void=>{
        dispach({
            type:'logout',
        });
    }
    //implementar una validacion para mostar los mensajes de acuerdo a la accion
    if(state.validando){
        return(
            <>
                <h3>Login</h3>
                 <div className="alert alert-info">
                 Validando....
                </div>
            </>
        )
    }
    
  return (
    <div>
        <h3>Login</h3>
        {(state.token==null)
        ?<div className="alert alert-danger"> No Autenticado.... </div>
        :<div className="alert alert-success">Autenticado....</div>
        }
        {(state.token==null)
            ?<button onClick={login} className="btn btn-primary">Login</button>
            :<button onClick={logout} className="btn btn-danger"  >Logout</button>
        }
        
        
        
       

    </div>
  )
}
