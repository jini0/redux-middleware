// 프리젠테이셔널 컴포넌트 
import React from 'react';

const Post = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;