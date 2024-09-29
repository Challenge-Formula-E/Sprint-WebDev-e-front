let isLogged;

export const useUser = () => {
    const logIn = ({ email, password }) => {
        if( email && password) {
            isLogged = true;
        }
    };

    return {    
        isLogged,
        logIn
    }

}