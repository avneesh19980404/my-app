import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/actions/posts';

const Posts = () => {
    const {posts} = useSelector(state=>state);
    const dispatch = useDispatch();
    console.log("posts  : ",posts)
    const onClickHandler = (e) =>{
        dispatch(getPosts());
    }
    return (
        <div>
            <h1> Posts </h1>
            <br/>
            <h3> Click the below button to get all posts </h3>
            <button onClick={(e)=>onClickHandler(e)}>GET POSTS</button>
           { posts && posts.data && posts.data.map((post)=>(
               <div>
                   <h5>{post.id} &nbsp;&nbsp; {post.title}</h5>
                    <p>{post.body}</p>
               </div>
           ))}
        </div>
    )
}

export default Posts
