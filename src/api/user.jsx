import { useLocation } from "react-router-dom";

export const oauth = /*async*/ () => {
    return login;
}

export const signup = /*async*/ () => {
    
}

export const login = /*async*/ () => {

}

export const setDB = () => {
    const {name, email, password} = useLocation();

    const data = {
        "name" : name,
        "email" : email,
        "password" : password
    }

    
}

export const getDB = () => {

}