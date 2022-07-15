// 보기 편하게 '리팩토링하기'(코드정리하기)
// modules 폴더의 posts.js에서
// thunk함수 
// GET_POSTS
export const createPromiseThunk = (type, promiseCreator) => {
    //GET_POSTS_SUCCESS, GET_POSTS_ERROR 가 들어갈거임 type 이니까!....
    const [ SUCCESS, ERROR ] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return param => async dispatch => {
        dispatch({ type, param })       //요청을 시작
        try{
            const payload = await promiseCreator(param); //api호출
            dispatch({ type: SUCCESS, payload });           //성공  / , payload: payload
        }
        catch(e) {
            dispatch({ type: ERROR, payload: e, error: true}) //실패
        }
    }
}
// 설명>
// dispatch({ type: GET_POST })       //요청을 시작
//     try{
//         const post = await postAPI.getPostById(id); //api호출
//         dispatch({ type: GET_POST_SUCCESS, post });           //성공  / , posts : posts를 전달하겠다
//         // dispatch({ type: GET_POST_SUCCESS, post: post });   이렇게 한걸 키와 값이 같아서 posts라는 것만 적어준거임!(생략해서)
//     }
//     catch(e) {
//         dispatch({ type: GET_POST_ERROR, error: e })
//     }

// 리듀서에서 사용할 수 있는 유틸함수 
export const reducerUtils = {
    initial: (initialData = null)=>({
        loading: false,
        data: initialData,
        error: null
    }),
    loading: (prevState = null)=>({
        loading: true,
        data: prevState,
        error: null
    }),
    success: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    error: error => ({
        loading: false,
        data: null,             //data: error       로도 해주면 됨..
        error: error            //error: true       로도 해주면 됨..
    })
}
// 설명> modules의 posts.js에서 저런식으로 안에 있던 걸 보기 편하게 정리하기 위해서!
//      리듀서가 실행됐을 때 바뀌는 상태를 관리하는거!  --> case 상태가 6개가 있음 - return해주는 값들이 코드가 계속 반복되어서 위에처럼 따로 뺀거!
// ex> case GET_POSTS:                  // 이런 상태가 6개 있음
//             return {                 // return 안의 반복되는 코드들을 정리하는거
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: null
//                 }
//             }