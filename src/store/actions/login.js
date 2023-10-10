import { LOGIN_API_START, LOGIN_API_SUCCESS, LOGIN_API_FAILURE } from './types';
import { setData } from '.';

export const login = () => {
    return async (dispatch) => {
        try{
            dispatch(setData(LOGIN_API_START));
            let result = await simulateLoginApi()
            dispatch(setData(LOGIN_API_SUCCESS,result))
        }
        catch(e){
            dispatch(setData(LOGIN_API_FAILURE,e))
        }
    }
}

const simulateLoginApi = async () =>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve("Login Successfully !!")
        }, 3000);
    })
}