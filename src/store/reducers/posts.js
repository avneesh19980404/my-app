import { POST_API_SUCCESS,POST_API_FAILURE,FETCH_POST_API } from '../actions/types'

const initialState ={
    loading: false,
    data: null,
    error:null
}

const postReducer = (state = initialState, action) =>{

    switch(action.type){
        case FETCH_POST_API:
            return {
                ...state,
                loading: true,
                data: null,
                error:null
            }
        case POST_API_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error:null
            }
        case POST_API_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error:action.payload
            }
        default:
            return state;
    }
}

export default postReducer;