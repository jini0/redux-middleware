// 7.14 메모장 참고 middleware
// 전달받은 액션을 출력하고 다음으로 넘기기(중간에 미들웨어를 타고 간다!!!!!)
// dispatch의 액션이 리듀서에게 바로 가지 않고 myLogger라는 미들웨어를 거치겠다 (리듀서에게 가기전에 dispatch한 액션을 마이로거에서 먼저 실행됨)
const myLogger = store => next => action => {
    console.log(action);    // 액션을 출력
    const result = next(action);    // 다음 미들웨어 (또는 리듀서)(미들웨어가 없으면 리듀서)에게 액션을 전달함
    console.log('\t', store.getState());            // \t : 들여쓰기(tab키)(콘솔에서 들여쓰기 하는거- 구분해서 보려고 한칸 띄워져서 콘솔에 찍힘) 스토어의 상태가 보임...
    return result;  // 여기서 반환하는 값은 dispatch(액션)의 결과물이 됩니다. 기본: undefined
};

export default myLogger;