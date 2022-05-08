import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Children } from 'react';

export const ProtectedRoute = ({children}) => {
    const status = useSelector(store => store.auth.isLoggedIn);
    if(status === false && Children.type.name === "Login") return children;
    if(status === false) return <Navigate to="/login" />
    if(status === true && children.type.name === "Login") return <Navigate to='/' />
    return children
}