import {createContext} from 'react'

 export const FirebaseContext= createContext(null)

 //export const AuthContext=createContext(null);

//  export default function Context({children}){
//     const [user,setUser]=useState(null)

//     return(
//         <AuthContext.Provider values={{user,setUser}}>
//             {children}
//         </AuthContext.Provider>
//     )}

//  export const  Context=({children})=>{
//     const [user,setUser]=useState(null)

//     return(
//         <AuthContext.Provider values={{user,setUser}}>
//             {children}
//         </AuthContext.Provider>
//     )
//  }

// export default Context

