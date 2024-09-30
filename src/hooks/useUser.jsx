let isLogged;

export const useUser = () => {
    const logIn = ({ email, password }) => {
        if( email && password) {
            isLogged = true;
        }else{
            alert("Preencha todos os campos para continuar")
        }
    };

    return {    
        isLogged,
        logIn
    }

}