import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    return (
        <ul>
            {posts.map(post=>(
                <li key={post.id}>
                    <Link to={`/${post.id}`}>{post.title}</Link>
                    {/* {post.title} */}
                </li>
            ))}
        </ul>
    );
};

export default PostList;