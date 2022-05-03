import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Status = () =>{
    const {isAuth, token} = useContext(AuthContext);
    return(
        <>
            {isAuth ? <h1>You are logged in <br /> {`token: ${token}`} </h1> : <h1>You are not logged in</h1>}

        </>
    );
}