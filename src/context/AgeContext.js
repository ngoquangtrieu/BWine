import React, { useReducer } from "react";
import {CHECK_AGE_BIG,CHECK_AGE_SMALL} from "../action"
import ageReducer from "../reducers/ageReducer";

const ageContext = React.createContext();

const initialState = {
    checkBig : true,
    checkSmall: false
}

const AgeProvider = ({children}) => {
    const [state , dispatch] = useReducer(ageReducer , initialState)

    const checkAgeBig = () => {
        dispatch({type : CHECK_AGE_BIG})
    }

    const checkAgeSmall = () => {
        dispatch({type : CHECK_AGE_SMALL})
    }
    return(
        <ageContext.Provider
            value = {{
                state,
                checkAgeBig,
                checkAgeSmall
            }}
        >
            {children}
        </ageContext.Provider>
    )
}

export {ageContext , AgeProvider}