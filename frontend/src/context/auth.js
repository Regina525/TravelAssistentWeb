import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [user,setcurrentUser] = useState(JSON.parse(localStorage.getItem("user")||null))
    const login = async(inputs) =>{
     const response = await axios.post("users/login",inputs)
     setcurrentUser(response.data)

    }
    const logout = async(inputs) =>{
        const response = await axios.post("users/logout",inputs)
        setcurrentUser(null)
   
       }
 useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(user))

 },[user])

 return (
    <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
 )
}

export default AuthProvider