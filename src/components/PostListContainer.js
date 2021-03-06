import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/posts';            //๐๋ฐ์์ getPosts๋ฅผ ๊ทธ๋๋ก ๋ถ๋ฌ์ค๋๊น import { getPosts } from '../api/posts'; ๋ก ๋ถ๋ฌ์ ๊ฐ์ ๋ชป๋ถ๋ฌ์ค๊ณ  ์์์..!
import PostList from './PostList';

const PostListContainer = (props) => {
    //useAsync์ ์ ์ฌํจ
    //๊ฐ์ฒด๊ตฌ์กฐ๋ถํดํ ๋น                                                                   //*modulesํด๋์ counter.js์ posts.js์์
    const { data, loading, error } = useSelector(state=> state.posts.posts);           //counter๊ฐ ๊ด๋ฆฌํ๋๊ฑด ์ซ์ ํ๋
                                                                                       //posts๊ฐ ๊ด๋ฆฌํ๋๊ฑฐ๋ posts์ post -> ์ด๊ธฐ๊ฐ(initialState)์ ๋๊ฐ๋ก ํ์์ posts , post
                                                                                       //const initialState = {posts : {loading: false, data: null, error: null}, post : {loading: false, data: null, error: null}}
    const dispatch = useDispatch();

    //์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ ํ ํฌ์คํธ๋ชฉ๋ก ์์ฒญํ๊ธฐ  --> ๋ง์ดํธ ๋ ๋๋, useEffect() ์ฌ์ฉ
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    if(loading) return <div>๋ก๋ฉ์ค...</div>;
    if(error) return <div>์๋ฌ ๋ฐ์</div>
    if(!data) return null
    return (
        <PostList posts={data} />
    );
};

export default PostListContainer;