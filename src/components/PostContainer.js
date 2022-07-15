import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../modules/posts';         //modules 리듀서에서 가져와야함 !!실수하면 안됨
import Post from './Post';

const PostContainer = ({ postId }) => {
    //객체 구조분해할당
    const { data, loading, error } = useSelector(state => state.posts.post );
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(postId))
    },[dispatch, postId])
    if(loading) return <div>로딩중....</div>
    if(error) return <div>에러발생....</div>
    if(!data) return null;       // 데이터 없으면
    return (
        <Post post={data} />
    );
};

export default PostContainer;