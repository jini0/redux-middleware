//๐modulesํด๋์ posts.js ๊ทธ๋๋ก ๋ณต์ฌ๋ถ์ฌ๋ฃ๊ธฐ ํ๊ธฐ(์์ ํด์ฃผ๋ ค๊ณ ) / ๋ฆฌํฉํ ๋ง ๐
//๐๋ฆฌํฉํ ๋ง ํ๊ธฐ ์ ์ posts.js์ ํํ ๋ณด๊ธฐ ์ํด์ ๋จ๊ฒจ๋๋ ค๊ณ  ๋ง๋ ๊ฑฐ์!!!๐

// ์ก์ํ์, ์ก์์์ฑํจ์, ์ด๊น๊ฐ, ๋ฆฌ๋์
// ํ๋ก๋ฏธ์ค๊ฐ ์์, ์ฑ๊ณต, ์คํจ ํ์ ๋ ๋ค๋ฅธ ์ก์์ ๋์คํจ์น ํด์ผํ๋ค.
// ๊ฐ ํ๋ก๋ฏธ์ค๋ง๋ค thunkํจ์๋ฅผ ๋ง๋ค์ด ์ฃผ์ด์ผ ํฉ๋๋ค.
// ๋ฆฌ๋์์์ ์ก์์ ๋ฐ๋ผ ๋ก๋ฉ์ค, ๊ฒฐ๊ณผ, ์๋ฌ์ํ๋ฅผ ๋ณ๊ฒฝ
import * as postAPI from '../api/posts';            // api/posts ์์ ํจ์ ๋ชจ๋ ๋ถ๋ฌ์ค๊ธฐ //  * : ๋ชจ๋  // as postAPI๋ผ๋ ์ด๋ฆ์ ์ฐ๊ฒ ๋ค! (mysql์ฟผ๋ฆฌ๋ฌธ ์๊ฐํ๋ฉด ๋น์ทํจ)
// --> api ํด๋์ posts.js์์ ๋น๋๊ธฐํจ์๋ค ๋ถ๋ฌ์ค๋ ค๊ณ  importํ๋๋ฐ ๊ทธ๋ฅ ๋ชจ๋  ํจ์ ๋ถ๋ฌ์ค๊ฒ ํ์!

// โ์ด๊น๊ฐ
const initialState = {
    //posts์ post์ ์ํ๊ด๋ฆฌํ ๊ฑฐ์
    posts : {
        loading: false,
        data: null,
        error: null
    },
    post : {
        loading: false,
        data: null,
        error: null
    }
}
// โ์ก์ํ์
// ํฌ์คํธ ์ฌ๋ฌ๊ฐ ์กฐํํ๊ธฐ
const GET_POSTS = "GET_POSTS";                  //์์ฒญ์์
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";  //์์ฒญ์ฑ๊ณต
const GET_POSTS_ERROR = "GET_POSTS_ERROR";      //์์ฒญ์คํจ

// ํฌ์คํธ ํ๋ ์กฐํํ๊ธฐ
const GET_POST = "GET_POST";                    //์์ฒญ์์
const GET_POST_SUCCESS = "GET_POST_SUCCESS";    //์์ฒญ์ฑ๊ณต
const GET_POST_ERROR = "GET_POST_ERROR";        //์์ฒญ์คํจ

// โthunkํจ์ 
export const getPosts = () => async dispatch => {
    dispatch({ type: GET_POSTS })       //์์ฒญ์ ์์
    try{
        const posts = await postAPI.getPosts(); //apiํธ์ถ
        dispatch({ type: GET_POSTS_SUCCESS, posts });           //์ฑ๊ณต  / , posts : posts๋ฅผ ์ ๋ฌํ๊ฒ ๋ค
        // dispatch({ type: GET_POSTS_SUCCESS, posts: posts });   ์ด๋ ๊ฒ ํ๊ฑธ ํค์ ๊ฐ์ด ๊ฐ์์ posts๋ผ๋ ๊ฒ๋ง ์ ์ด์ค๊ฑฐ์!(์๋ตํด์)
    }
    catch(e) {
        dispatch({ type: GET_POSTS_ERROR, error: e })
    }
}
// ํ๋๋ง ์กฐํํ๋ thunkํจ์
export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST })       //์์ฒญ์ ์์
    try{
        const post = await postAPI.getPostById(id); //apiํธ์ถ
        dispatch({ type: GET_POST_SUCCESS, post });           //์ฑ๊ณต  / , posts : posts๋ฅผ ์ ๋ฌํ๊ฒ ๋ค
        // dispatch({ type: GET_POST_SUCCESS, post: post });   ์ด๋ ๊ฒ ํ๊ฑธ ํค์ ๊ฐ์ด ๊ฐ์์ posts๋ผ๋ ๊ฒ๋ง ์ ์ด์ค๊ฑฐ์!(์๋ตํด์)
    }
    catch(e) {
        dispatch({ type: GET_POST_ERROR, error: e })
    }
}

// โ๋ฆฌ๋์ํจ์
//export default : ๋ด๋ณด๋ด๊ธฐ - ๋ฆฌ๋์๋ default๋ ๋ถ์ฌ์ผํจ
export default function posts_test(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.posts,
                    error: null
                }
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case GET_POST:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    loading: false,
                    data: action.post,
                    error: null
                }
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}
