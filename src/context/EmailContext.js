import {CHANGE_EMAIL,CHECK_EMAIL} from "../action"
import React, { useEffect, useReducer } from "react"
import emailReducer from "../reducers/emailReducer"

const emailContext = React.createContext()

const initialState = {
    email : "",
    checkEmail : 1,
    emailTrue : ""
}

const EmailProvider = ({children}) => {
    const [state , dispatch] = useReducer(emailReducer , initialState)

    const changeEmail = (value) => {
        dispatch({type: CHANGE_EMAIL , payload : value})
    }
    const checkEmailDo = () => {
        dispatch({type: CHECK_EMAIL})
    }

    return(
        <emailContext.Provider
            value={{
                state,
                changeEmail,
                checkEmailDo
            }}
        >
            {children}
        </emailContext.Provider>
    )
}

export {emailContext , EmailProvider}