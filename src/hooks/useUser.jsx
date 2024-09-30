import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useUser = () => {
    const [loggedIn, setLoggedIn] = useState(() => {
        return localStorage.getItem('isLogged') === 'true';
    });
    const navigate = useNavigate();

    const logIn = ({ email, password }) => {
        if (email && password) {
            setLoggedIn(true);
            localStorage.setItem('isLogged', 'true');
            return true;
        } else {
            alert("Preencha todos os campos para continuar");
            return false;
        }
    };

    const logOut = () => {
        setLoggedIn(false);
        localStorage.removeItem('isLogged');
        navigate('/login');
    };

    return {
        isLogged: loggedIn,
        logIn,
        logOut
    };
};
