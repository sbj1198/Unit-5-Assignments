// import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () =>{

    const {handleChange} = useContext(AuthContext);
    
    return(
        <>
        <button
            style={{
                background: "none",
                border: "none",
                borderRadius: "10px",
                padding: "0.5em",
                backgroundColor: "chartreuse",
                margin: "5px",
                fontSize: "1.5rem"
            }}
            onClick={() => handleChange(true)}
            >
            Login
        </button>

        <button
            style={{
                
                background: "none",
                border: "none",
                borderRadius: "10px",
                padding: "0.5em",
                backgroundColor: "chartreuse",
                margin: "5px",
                fontSize: "1.5rem"
            }}
            onClick={() => handleChange(false)}
        >
            Logout
        </button>
        </>
    );
}