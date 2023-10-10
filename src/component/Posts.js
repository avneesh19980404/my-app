import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/actions/posts';

const Posts = () => {
    const {posts:{data,loading,error}} = useSelector(state=>state);
    const dispatch = useDispatch();
    const onClickHandler = (e) =>{
        dispatch(getPosts());
    }
    console.log("loading..",loading)
    return (
        <div>
            {loading?<h1>Loading..............................</h1>:
            <>
                    <h1> Posts </h1>
                    <br/>
                    <h3> Click the below button to get all posts </h3>
                    <button onClick={(e)=>onClickHandler(e)}>GET POSTS</button>
                    { 
                        data && data.length > 0 && data.map((post,index)=>(
                            <div key={index}>
                                <h5>{post.id} &nbsp;&nbsp; {post.title}</h5>
                                    <p>{post.body}</p>
                            </div>
                        ))
                    }
            </>
            }
        </div>
    )
}

export default Posts
