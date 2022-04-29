import {CHECK_AGE_BIG , CHECK_AGE_SMALL} from "../action"

const ageReducer = (state , action) => {
    switch (action.type) {
        case CHECK_AGE_SMALL :{
            return {
                ...state,checkSmall:true
            }
        }
        case CHECK_AGE_BIG : {
            return {
                ...state , checkBig:false
            }
        }
        default:{
            return state
        }
    }
}

export default ageReducer