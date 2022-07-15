// 7.14 <리덕스 미들웨어>
// 액션타입, 액션생성함수, 초깃값, 리듀서
// ✔초깃값
const initialState = 0;         //상태 꼭 객체가 되어야하는거 아님(상관없음)

// ✔액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// ✔액션생성함수   -  액션을 리턴해주는 함수
// dispatch({ type: INCREASE })  같다  dispatch(increase())
export const increase = () => ({ type : INCREASE })                // return을 생략한거(화살표함수라서)
export const decrease = () => ({ type : DECREASE })
//설명>
// dispatch({ type: INCREASE }) 이렇게 dispatch를 적어줬는데 액션생성함수가 있으면,
// dispatch(increase())    로 이렇게 액션생성함수를 그대로 적어줄 수 있음!!!! (위아래 두개 같은거!!!!)
// --> increase() 이 함수가 return해주는게 { type : INCREASE } 이거니까!!!

//카운터 딜레이 주기
export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000)            // 1000: 1초  / 리듀서가 실행되는게 아니고 setTimeout(() => dispatch(increase()), 1000) 얘가 실행됨!  그리고 나서 리듀서 실행..? --> 중간의 단계가 하나 더 생긴거
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000)
}

// ✔리듀서
export default function counter(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
//액션생성함수와 리듀서 - 내보내기 위해 export 해주기!