import axios from 'axios'
import { FETCH_POST_API, POST_API_SUCCESS,POST_API_FAILURE } from './types';
import { setData } from '.';

export const getPosts = () => {
    return (dispatch) => {
        dispatch(setData(FETCH_POST_API));
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>{
            return simulateLoginApi(res);
        })
        .then(r=>{
            dispatch(setData(POST_API_SUCCESS,r.data))
        })
        .catch(err=>{
            dispatch(setData(POST_API_FAILURE,err))
        });
}
}

const simulateLoginApi = async (data) =>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve(data)
        }, 3000);
    })
}