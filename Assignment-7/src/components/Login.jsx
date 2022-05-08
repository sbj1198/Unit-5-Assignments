import { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {userStatus} from '../Redux/Auth/action';

export const Login = () => {
    const [formData, setFormData] = useState({
        username: null,
        password: null
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logInStatus, setLoginStatus] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    }

    const handleSubmit = () => {
        e.preventDefault();
        setLoginStatus("User logging in");
        axios.post("https://reqres.in/api/login",{
            formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){ 
                setLoginStatus("Login failed");
                return;
            }
            localStorage.setItem("authenticationToken", data.token);

            dispatch(userStatus(data.token));
            navigate(-2, {replace: true});
        });
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="username" placeholder="Enter Username"/>
                <input type="password" onChange={handleChange} name="password" placeholder="Enter Password"/>
                <input type="submit" value="submit" />
            </form>
            {`Login Status: ${logInStatus}`}
        </div>
    )
};

