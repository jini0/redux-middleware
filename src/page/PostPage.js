import React from 'react';
import PostContainer from '../components/PostContainer';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { id } = useParams();
    return (
        <PostContainer postId={parseInt(id)}/>  
        // id가 받아오는거는 문자열로 받아와서 조회가 안돼서 parseInt로 int로 바꿔서 해줘야함
    );
};

export default PostPage;