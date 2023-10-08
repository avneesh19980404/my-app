import axios from 'axios'
import { GET_POSTS, GET_POSTS_ERROR } from './types';

export const getPosts = () => {
    console.log("called")
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>{
            console.log("response : ",res)
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })

        }).catch(err=>{
            console.log("error",err)
            dispatch({
                type: GET_POSTS_ERROR,
                payload: err
            })
        });
}
}