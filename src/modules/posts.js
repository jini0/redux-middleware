//해주는 이유가 dispatch는 그냥 action객체를 전달해주는거라 데이터들을 전달해줄 수 없음
//그래서 데이터들을 전달해서 보내주려고 한 단계 더 해주는거임!!!(데이터 값들을 받아서 보내줘야하니까)
//useAsync 에서 axios 해준거를 이렇게 해주는거!!!  

// 액션타입, 액션생성함수, 초깃값, 리듀서
// 프로미스가 시작, 성공, 실패 했을 때 다른 액션을 디스패치 해야한다.
// 각 프로미스마다 thunk함수를 만들어 주어야 합니다.
// 리듀서에서 액션에 따라 로딩중, 결과, 에러상태를 변경
import * as postAPI from '../api/posts';            // api/posts 안의 함수 모두 불러오기 //  * : 모두  // as postAPI라는 이름을 쓰겠다! (mysql쿼리문 생각하면 비슷함)
// --> api 폴더의 posts.js에서 비동기함수들 불러오려고 import하는데 그냥 모든 함수 불러오게 했음!
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';           // 리팩토링한거 불러오기(asyncUtills.js)

// ✔초깃값
// 2. 반복되는 코드 정리하여 간단하게 적어주기(반복되는 초기값 {}객체를 initial()를 실행하여 리턴받음)
const initialState = {
    //posts와 post의 상태관리할거임
    posts : reducerUtils.initial(),
    post : reducerUtils.initial()
}
// 1. 
// const initialState = {
//     //posts와 post의 상태관리할거임
//     posts : {
//         loading: false,
//         data: null,
//         error: null
//     },
//     post : {
//         loading: false,
//         data: null,
//         error: null
//     }
// }


// ✔액션타입
// - 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS";                  //요청시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";  //요청성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR";      //요청실패

// - 포스트 하나 조회하기
const GET_POST = "GET_POST";                    //요청시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS";    //요청성공
const GET_POST_ERROR = "GET_POST_ERROR";        //요청실패


// ✔thunk함수 
// 2. 리팩토링 후 코드 간단하게 하기
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);

// 1. 
// export const getPosts = () => async dispatch => {
//     dispatch({ type: GET_POSTS })       //요청을 시작
//     try{
//         const posts = await postAPI.getPosts(); //api호출
//         dispatch({ type: GET_POSTS_SUCCESS, posts });           //성공  / , posts : posts를 전달하겠다
//         // dispatch({ type: GET_POSTS_SUCCESS, posts: posts });   이렇게 한걸 키와 값이 같아서 posts라는 것만 적어준거임!(생략해서)
//     }
//     catch(e) {
//         dispatch({ type: GET_POSTS_ERROR, error: e })
//     }
// }

// - 하나만 조회하는 thunk함수
// 2. 리팩토링 후 코드 간단하게 하기
export const getPost = createPromiseThunk(GET_POST, postAPI.getPostById);

// 1.
// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST })       //요청을 시작
//     try{
//         const post = await postAPI.getPostById(id); //api호출
//         dispatch({ type: GET_POST_SUCCESS, post });           //성공  / , posts : posts를 전달하겠다
//         // dispatch({ type: GET_POST_SUCCESS, post: post });   이렇게 한걸 키와 값이 같아서 posts라는 것만 적어준거임!(생략해서)
//     }
//     catch(e) {
//         dispatch({ type: GET_POST_ERROR, error: e })           //실패
//     }
// }


// ✔리듀서함수
//export default : 내보내기 - 리듀서는 default도 붙여야함
// 2. 리팩토링 후 코드 간단하게 하기
export default function posts(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading()
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(action.payload)
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.error)
            }
        case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading()
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: reducerUtils.success(action.payload)
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: reducerUtils.error(action.error)
            }
        default:
            return state;
    }
}
// 1.
// export default function posts(state = initialState, action){
//     switch(action.type){
//         case GET_POSTS:
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: null
//                 }
//             }
//         case GET_POSTS_SUCCESS:
//             return {
//                 ...state,
//                 posts: {
//                     loading: false,
//                     data: action.posts,
//                     error: null
//                 }
//             }
//         case GET_POSTS_ERROR:
//             return {
//                 ...state,
//                 posts: {
//                     loading: false,
//                     data: null,
//                     error: action.error
//                 }
//             }
//         case GET_POST:
//             return {
//                 ...state,
//                 post: {
//                     loading: true,
//                     data: null,
//                     error: null
//                 }
//             }
//         case GET_POST_SUCCESS:
//             return {
//                 ...state,
//                 post: {
//                     loading: false,
//                     data: action.post,
//                     error: null
//                 }
//             }
//         case GET_POST_ERROR:
//             return {
//                 ...state,
//                 post: {
//                     loading: false,
//                     data: null,
//                     error: action.error
//                 }
//             }
//         default:
//             return state;
//     }
// }
