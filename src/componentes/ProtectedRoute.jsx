import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from '../hooks/useUser';

export const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLogged } = useUser();

    useEffect(() => {
        if(!isLogged) {
            navigate('/login');
        }
    }, []);

    return children 
}
