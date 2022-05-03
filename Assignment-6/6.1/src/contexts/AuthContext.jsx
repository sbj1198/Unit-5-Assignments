import { useState } from "react";
import { createContext } from "react";
import axios from "axios";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

    const [token, setToken] = useState(null);
    const [isAuth, toggleIsAuth] = useState(false);

    async function handleChange (stats) {

        if(stats === true){
            toggleIsAuth(true);
            const res = await axios.post("https://reqres.in/api/login", {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        });
        // console.log(res);
        setToken(res.data.token);
        }
        else{
            toggleIsAuth(false);
            setToken(null);
        }

        // console.log(res.data);
    };

    return(
        <AuthContext.Provider value={{isAuth, handleChange, token}}>
            {children}
        </AuthContext.Provider>
    );
}