import {CHANGE_EMAIL , CHECK_EMAIL}  from "../action"

const emailReducer = (state , action) => {
    switch (action.type) {
        case CHANGE_EMAIL : {
            return {
                ...state , email : action.payload , checkEmail : 1
            }
        }
        case CHECK_EMAIL : {
            const {email} = state
            if(email.length >= 8 && email.indexOf("@") != -1 && email.indexOf(".com") != -1 ){
                window.scrollTo(0,0)
                return { ...state , checkEmail : true , emailTrue : email , email : "" }
            }else{
                return { ...state , checkEmail : false , email : ""}
            }
        }
        default:
            return state
    }
}


export default emailReducer