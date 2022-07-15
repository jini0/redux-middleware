//💙modules폴더의 posts.js 그대로 복사붙여넣기 하기(수정해주려고) / 리팩토링 💙
//💙리팩토링 하기 전에 posts.js의 형태 보기 위해서 남겨두려고 만든거임!!!💙

// 액션타입, 액션생성함수, 초깃값, 리듀서
// 프로미스가 시작, 성공, 실패 했을 때 다른 액션을 디스패치 해야한다.
// 각 프로미스마다 thunk함수를 만들어 주어야 합니다.
// 리듀서에서 액션에 따라 로딩중, 결과, 에러상태를 변경
import * as postAPI from '../api/posts';            // api/posts 안의 함수 모두 불러오기 //  * : 모두  // as postAPI라는 이름을 쓰겠다! (mysql쿼리문 생각하면 비슷함)
// --> api 폴더의 posts.js에서 비동기함수들 불러오려고 import하는데 그냥 모든 함수 불러오게 했음!

// ✔초깃값
const initialState = {
    //posts와 post의 상태관리할거임
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
// ✔액션타입
// 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS";                  //요청시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";  //요청성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR";      //요청실패

// 포스트 하나 조회하기
const GET_POST = "GET_POST";                    //요청시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS";    //요청성공
const GET_POST_ERROR = "GET_POST_ERROR";        //요청실패

// ✔thunk함수 
export const getPosts = () => async dispatch => {
    dispatch({ type: GET_POSTS })       //요청을 시작
    try{
        const posts = await postAPI.getPosts(); //api호출
        dispatch({ type: GET_POSTS_SUCCESS, posts });           //성공  / , posts : posts를 전달하겠다
        // dispatch({ type: GET_POSTS_SUCCESS, posts: posts });   이렇게 한걸 키와 값이 같아서 posts라는 것만 적어준거임!(생략해서)
    }
    catch(e) {
        dispatch({ type: GET_POSTS_ERROR, error: e })
    }
}
// 하나만 조회하는 thunk함수
export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST })       //요청을 시작
    try{
        const post = await postAPI.getPostById(id); //api호출
        dispatch({ type: GET_POST_SUCCESS, post });           //성공  / , posts : posts를 전달하겠다
        // dispatch({ type: GET_POST_SUCCESS, post: post });   이렇게 한걸 키와 값이 같아서 posts라는 것만 적어준거임!(생략해서)
    }
    catch(e) {
        dispatch({ type: GET_POST_ERROR, error: e })
    }
}

// ✔리듀서함수
//export default : 내보내기 - 리듀서는 default도 붙여야함
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
