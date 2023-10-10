import { LOGIN_API_START,LOGIN_API_SUCCESS,LOGIN_API_FAILURE } from '../actions/types'

const initialState ={
    loading: false,
    data: {
        isLoggedIn:false
    },
    error:null
}

const loginReducer = (state = initialState, action) =>{

    switch(action.type){
        case LOGIN_API_START:
            return {
                ...state,
                loading: true,
                data: {
                    isLoggedIn:false
                },
                error:null
            }
        case LOGIN_API_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    isLoggedIn:true
                },
                error:null
            }
        case LOGIN_API_FAILURE:
            return {
                ...state,
                loading: false,
                data: {
                    isLoggedIn:false
                },
                error:action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;