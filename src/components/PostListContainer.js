import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/posts';            //👌밑에서 getPosts를 그대로 불러오니까 import { getPosts } from '../api/posts'; 로 불러서 값을 못불러오고 있었음..!
import PostList from './PostList';

const PostListContainer = (props) => {
    //useAsync와 유사함
    //객체구조분해할당                                                                   //*modules폴더의 counter.js와 posts.js에서
    const { data, loading, error } = useSelector(state=> state.posts.posts);           //counter가 관리하는건 숫자 하나
                                                                                       //posts가 관리하는거는 posts와 post -> 초기값(initialState)을 두개로 했었음 posts , post
                                                                                       //const initialState = {posts : {loading: false, data: null, error: null}, post : {loading: false, data: null, error: null}}
    const dispatch = useDispatch();

    //컴포넌트가 마운트 후 포스트목록 요청하기  --> 마운트 될때는, useEffect() 사용
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러 발생</div>
    if(!data) return null
    return (
        <PostList posts={data} />
    );
};

export default PostListContainer;