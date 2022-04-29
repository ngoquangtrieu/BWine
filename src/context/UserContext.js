import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const userContext = React.createContext();

const UserProvider = ({children}) => {
    const { loginWithRedirect , logout , user } = useAuth0()
    return (
        <userContext.Provider
            value={{loginWithRedirect , logout , user}}
        >
            {children}
        </userContext.Provider>
    )
}

export {userContext , UserProvider}